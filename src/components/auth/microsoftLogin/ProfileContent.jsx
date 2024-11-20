import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../config/msalConfig";
import { callMsGraph } from "./graph";
import axios from "axios";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken)
            .then((data) => {
              const payload = {
                uid: data.id,
                email: data.mail || data.userPrincipalName || "",
                name: data.givenName || data.displayName || "",
                phone: data.mobilePhone || "",
                login_type: "azure_ad",
                subscription_type: "free",
                subscription_duration: "yearly",
                subscription_date: new Date().toISOString().split("T")[0],
                workspace: data.givenName || "demo",
              };

              const apiUrl =
                window.location.hostname === "localhost"
                  ? "http://localhost:2000"
                  : "https://thub-web-server-2-0-378678297066.us-central1.run.app";
              axios
                .post(`${apiUrl}/microuser`, payload)
                .then((response) => {
                  console.log("Data stored:", response.data);
                })
                .catch((error) => {
                  console.error("Error storing data:", error);
                  setError("Error storing data: " + error.message);
                });
            })
            .catch((error) => {
              console.error("Error fetching data from Graph API:", error);
              setError("Error fetching data from Graph API: " + error.message);
            });
        })
        .catch((error) => {
          console.error("Error acquiring token silently", error);
          setError("Error acquiring token silently: " + error.message);
        });
    }
  }, [accounts, instance]);

  return <div className="page-layout">{error && <h3>{error}</h3>}</div>;
};

export default ProfileContent;

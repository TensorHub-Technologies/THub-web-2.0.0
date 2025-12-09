import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../config/msalConfig";
import { callMsGraph } from "./graph";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import "../../auth/index.css";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (accounts && accounts.length > 0) {
      setLoading(true);
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
                subscription_date: new Date().toISOString().split("T")[0],
                workspace: "",
              };

              const apiUrl =
                window.location.hostname === "localhost"
                  ? "http://localhost:2000"
                  : "https://thub-server.wittycoast-8619cdd6.westus2.azurecontainerapps.io";

              axios
                .post(`${apiUrl}/microuser`, payload)
                .then((response) => {
                  const data = response.data;
                  const userId = data.user?.uid;
                  const finalWorkspace = data.user?.workspace || "app";
                  const theme =
                    localStorage.getItem("isDarkMode") === "true"
                      ? "dark"
                      : "lite";

                  let redirectUrl;
                  switch (window.location.hostname) {
                    case "localhost":
                      redirectUrl = `http://localhost:8080/?theme=${theme}&uid=${userId}`;
                      break;
                    case "https://thub-web.happytree-73f6fdda.westus2.azurecontainerapps.io":
                      redirectUrl = `http://34.31.158.201/?theme=${theme}&uid=${userId}`;
                      break;
                    default:
                      redirectUrl = `https://${finalWorkspace}.thub.tech/?theme=${theme}&uid=${userId}`;
                      break;
                  }
                  sessionStorage.clear();
                  setTimeout(() => {
                    window.location.href = redirectUrl;
                  }, 100);
                })
                .catch((error) => {
                  console.error("Error storing data:", error);
                  toast.error("Error storing data: " + error.message);
                });
            })
            .catch((error) => {
              toast.error(
                "Error fetching data from Graph API: " + error.message,
              );
            });
        })
        .catch((error) => {
          console.error("Error acquiring token silently", error);
          toast.error("Error acquiring token silently: " + error.message);
        });
    }
  }, [accounts, instance]);

  return (
    <>
      <ToastContainer />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-gray-900 z-50">
          {/* Logo Animation */}
          <div className="relative w-32 h-[12.5rem] flex flex-col items-start gap-2">
            <div className="logo-part top">
              <img
                src="/assets/thub_top.png"
                alt="Loading Part 1"
                className="min-w-32 h-6"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="logo-part left">
                <img
                  src="/assets/thub_left.png"
                  alt="Loading Part 2"
                  className="w-[3.75rem]"
                />
              </div>
              <div className="logo-part right">
                <img
                  src="/assets/thub_right.png"
                  alt="Loading Part 3"
                  className="w-[3.75rem]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileContent;

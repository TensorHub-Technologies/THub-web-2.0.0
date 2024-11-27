import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./index.css";
import { FcGoogle } from "react-icons/fc";

function Google_Custom_Button() {
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      setLoading(true);
      console.log("Authorization Code:", response);

      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:2000"
          : "https://thub-web-server-2-0-378678297066.us-central1.run.app";

      try {
        const { data } = await axios.post(`${apiUrl}/api/auth/google`, {
          code: response.code,
        });

        const { id_token, workspace, userId } = data;
        console.log("ID Token:", id_token, "workspace", workspace);

        const finalWorkspace = workspace || "app";
        const theme =
          localStorage.getItem("isDarkMode") === "true" ? "dark" : "lite";

        let redirectUrl;

        switch (window.location.hostname) {
          case "localhost":
            redirectUrl = `http://localhost:8080/?theme=${theme}&uid=${userId}`;
            break;
          case "thub-web-2-0-0-378678297066.us-central1.run.app":
            redirectUrl = `https://demo.thub.tech/?theme=${theme}&uid=${userId}`;
            break;
          default:
            redirectUrl = `https://${finalWorkspace}.thub.tech/?theme=${theme}&uid=${userId}`;
            break;
        }

        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 100);
      } catch (error) {
        console.error("Failed to exchange code:", error);
      }
    },

    scope: "openid profile email",
    flow: "auth-code",
    access_type: "offline",
  });

  return (
    <div>
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
      <button
        type="button"
        onClick={login}
        className="px-16 text-black bg-white border dark:border-gray-500 dark:hover:border-primary-dark hover:border-primary focus:outline-none font-medium rounded-lg text-lg py-2.5 text-center inline-flex items-center gap-5 dark:bg-black dark:text-white"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
}

export default Google_Custom_Button;

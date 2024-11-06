import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Google_Custom_Button() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Authorization Code:", response);

      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:2000"
          : "https://thub-web-ser-2-0ls-dot-thub-dev-420204.uc.r.appspot.com";

      try {
        const { data } = await axios.post(`${apiUrl}/api/auth/google`, {
          code: response.code,
        });

        const { id_token, workspace, userId } = data;
        console.log("ID Token:", id_token, "workspace", workspace);

        const finalWorkspace = workspace || "beta";
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

        window.location.href = redirectUrl;
        alert("User login successful");
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
      <button
        type="button"
        onClick={login}
        className="px-16 text-black bg-white border dark:border-gray-500 dark:hover:border-primary-dark hover:border-primary  focus:outline-none font-medium rounded-lg text-lg  py-2.5 text-center inline-flex items-center dark:bg-black dark:text-white"
      >
        <svg
          className="w-3 h-4 me-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fillRule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clipRule="evenodd"
          />
        </svg>
        Continue with Google
      </button>
    </div>
  );
}

export default Google_Custom_Button;

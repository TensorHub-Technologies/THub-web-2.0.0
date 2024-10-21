import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

function Google_Custom_Button() {
  const [userInfo, setUserInfo] = useState(null);

  const login = useGoogleLogin({
    scope: "openid email profile",
    onSuccess: async (credentialResponse) => {
      console.log("Access Token:", credentialResponse.access_token);

      // Exchange token or fetch user profile
      const userInfoData = await fetchUserInfo(credentialResponse.access_token);
      console.log("User Info:", userInfoData);
      alert("Token generated successfully");
      setUserInfo(userInfoData);
      console.log(userInfo);
    },
    onError: () => console.log("Login Failed"),
  });

  const fetchUserInfo = async (accessToken) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          login();
        }}
        className="px-16 text-black bg-white border dark:border-gray-500 dark:hover:border-primary-dark hover:border-primary  focus:outline-none font-medium rounded-lg text-lg  py-2.5 text-center inline-flex items-center dark:bg-black dark:text-white"
      >
        <svg
          className="w-6 h-6 me-5"
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

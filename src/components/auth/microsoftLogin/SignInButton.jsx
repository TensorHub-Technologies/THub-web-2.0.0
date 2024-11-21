import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../config/msalConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleLogin}
        className="px-12  text-black bg-white border dark:border-gray-500 dark:hover:border-primary-dark hover:border-primary focus:outline-none font-medium rounded-lg text-lg py-2.5 text-center inline-flex items-center dark:bg-black dark:text-white gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 16 16"
          id="microsoft"
          className="w-4 ml-4"
        >
          <path
            fill="#4CAF50"
            d="M8.5 7.5H16v-7a.5.5 0 0 0-.5-.5h-7v7.5z"
          ></path>
          <path fill="#F44336" d="M7.5 7.5V0h-7a.5.5 0 0 0-.5.5v7h7.5z"></path>
          <path fill="#2196F3" d="M7.5 8.5H0v7a.5.5 0 0 0 .5.5h7V8.5z"></path>
          <path
            fill="#FFC107"
            d="M8.5 8.5V16h7a.5.5 0 0 0 .5-.5v-7H8.5z"
          ></path>
        </svg>
        Continue with Microsoft
      </button>
    </>
  );
};

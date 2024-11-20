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
        className="px-12 text-black bg-white border dark:border-gray-500 dark:hover:border-primary-dark hover:border-primary focus:outline-none font-medium rounded-lg text-lg py-2.5 text-center inline-flex items-center dark:bg-black dark:text-white"
      >
        <svg
          className="w-5 h-5 me-5 ml-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path d="M3 0C1.343 0 0 1.343 0 3v13c0 1.657 1.343 3 3 3h12c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3H3zm0 1h12c1.104 0 2 .896 2 2v12c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2V3c0-1.104.896-2 2-2zm3 4h2v4H6V5zm4 0h2v4h-2V5zm-4 5h2v4H6v-4zm4 0h2v4h-2v-4z" />
        </svg>
        Continue with Microsoft
      </button>
    </>
  );
};

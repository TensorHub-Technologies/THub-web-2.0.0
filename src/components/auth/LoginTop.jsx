import ThubLogo from "../../assets/images/THub.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google_Custom_Button from "./Google_Custom_Button";
import Github_Custom_Button from "./Github_Custom_Button";
import ProfileContent from "./microsoftLogin/ProfileContent";
import { SignInButton } from "./microsoftLogin/SignInButton";

const LoginTop = () => {
  return (
    <div className=" flex flex-col items-center gap-10">
      <a href="https://thub.tech/">
        <img className="w-40" src={ThubLogo} alt="THub Logo" />
      </a>
      <div className=" flex flex-col w-96 justify-center items-center gap-10">
        <GoogleOAuthProvider clientId="378678297066-q6qeqtpfh0ih4e99lv887o1rgduehs9u.apps.googleusercontent.com">
          <Google_Custom_Button />
        </GoogleOAuthProvider>
        <div>
          <Github_Custom_Button />
        </div>
        <div>
          <SignInButton />
          <ProfileContent />
        </div>
        <div className="flex items-center justify-center my-6 w-full">
          <hr className="border dark:border-gray-600 w-24 " />
          <span className="dark:text-white">Or Register with Email</span>
          <hr className="border dark:border-gray-600 w-24" />
        </div>
      </div>
    </div>
  );
};

export default LoginTop;

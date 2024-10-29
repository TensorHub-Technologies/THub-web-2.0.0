import { useNavigate } from "react-router-dom";
import LoginTop from "./LoginTop";
import SignUp from "./SignUp";
import { MdOutlineClose } from "react-icons/md";
import LeftImage2 from "./LeftImage2";

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center bg-white dark:bg-secondary p-4 md:p-0">
        <div className="text-white text-center">
          <LeftImage2 />
        </div>
      </div>

      <div className="flex flex-col justify-center dark:bg-secondary">
        <div className="flex relative justify-between bg-background dark:bg-secondary py-6 ">
          <div className="flex-grow flex justify-center">
            <LoginTop />
          </div>
          <div className="absolute right-0 pr-6">
            <button
              className="border dark:border-primary-dark  dark:text-secondary dark:bg-primary-dark p-2 rounded-lg border-primary bg-primary text-background"
              onClick={() => handleClick()}
            >
              <MdOutlineClose size={24} />
            </button>
          </div>
        </div>
        <div className="mx-4 md:mx-28 bg-white dark:bg-secondary p-4 ">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

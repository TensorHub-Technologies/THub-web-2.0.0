import ThubLogo from "../../assets/images/THub.svg";

const LoginTop = () => {
  return (
    <div className="">
      <img className="w-40" src={ThubLogo} alt="THub Logo" />
      <div className="gap-4 text-center dark:text-background ">
        <h3 className="mt-10"> Continue With Google </h3>
        <h3 className="mt-10"> Continue With GitHub </h3>
        <h3 className="mt-10"> Or sign in with email</h3>
      </div>
    </div>
  );
};

export default LoginTop;

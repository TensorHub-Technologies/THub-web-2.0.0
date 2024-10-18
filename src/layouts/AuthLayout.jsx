import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="text-black">
      {" "}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;

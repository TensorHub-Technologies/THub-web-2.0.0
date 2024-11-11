import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { useState } from "react";
import { signInValidationSchema } from "../../schemas/signInValidationSchema";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    console.log("Form Data", values);
    const { email, password } = values;

    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:2000"
        : "https://thub-web-ser-2-0ls-dot-thub-dev-420204.uc.r.appspot.com";
    try {
      const response = await axios.post(`${apiUrl}/loginUser`, {
        email,
        password,
      });
      if (response.status === 200) {
        setLoading(true);
        console.log("User inserted successfully");
        const { token, userId, workspace } = response.data;
        localStorage.setItem("token", token);

        const finalWorkspace = workspace || "app";
        const theme =
          localStorage.getItem("isDarkMode") === "true" ? "dark" : "lite";

        switch (window.location.hostname) {
          case "localhost":
            window.location.href = `http://localhost:8080/?theme=${theme}&uid=${userId}`;
            break;
          case "thub-web-2-0-0-378678297066.us-central1.run.app":
            window.location.href = `https://demo.thub.tech/?theme=${theme}&uid=${userId}`;
            break;
          default:
            window.location.href = `https://${finalWorkspace}.thub.tech/?theme=${theme}&uid=${userId}`;
            break;
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error(`Invalid email or password.`, {
        theme: "colored",
        style: {
          background: "red",
          color: "white",
        },
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-primary dark:bg-primary-dark animate-pulse z-50" />
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signInValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className="flex justify-center">
            <Form className="">
              <div className="space-y-10">
                <div className="">
                  <div className="relative">
                    <span className="absolute left-4 top-[18px] dark:text-secondary-dark ">
                      <GoMail />
                    </span>

                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="block w-80 pl-12 pr-2 py-2 dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1 absolute"
                  />
                </div>
                <div className="mb-4 mt-7">
                  <div className="relative">
                    <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                      <AiOutlineUser />
                    </span>
                    <Field
                      type={showPassword ? "password" : "text"}
                      name="password"
                      placeholder="Password"
                      className="block w-80 pl-12 pr-2 py-2 dark:text-background dark:bg-secondary border shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark rounded-md text-lg focus:ring-1"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-5 cursor-pointer dark:text-secondary-dark"
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1 absolute"
                  />
                </div>
              </div>

              <div className="text-end mt-1">
                <Link
                  to="/auth/forgot-password"
                  className="text-primary dark:text-primary-dark"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full mt-8 py-3 px-6 bg-primary dark:bg-primary-dark text-white dark:text-secondary rounded-lg hover:bg-[#31519b] dark:hover:bg-[#e65ca8]"
              >
                Sign In With THub
              </button>

              <div className="mt-4 text-center">
                <span className="text-gray-600 dark:text-secondary-dark -ml-6">
                  Don&apos;t have an account?{" "}
                </span>
                <Link
                  to="/auth/register"
                  className="text-primary dark:text-primary-dark "
                >
                  Sign Up for Free
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;

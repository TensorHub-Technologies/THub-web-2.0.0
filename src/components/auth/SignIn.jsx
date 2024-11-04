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

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    console.log("Form Data", values);
    const { email, password } = values;
    console.log(email, password);
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:2000/loginUser"
        : "https://thub-web-ser-2-0ls-dot-thub-dev-420204.uc.r.appspot.com/loginUser";
    try {
      const response = await axios.post(apiUrl, { email, password });
      if (response.status === 200) {
        console.log("user inserted successfully");
        const { token, userId, workspace } = response.data;
        localStorage.setItem("token", token);
        alert("user login successful");

        const finalWorkspace = workspace === null ? "beta" : workspace;
        console.log("finalWorkspace: ", finalWorkspace);
        console.log("data?.workspace: ", workspace);
        switch (window.location.hostname) {
          case "localhost":
            window.location.href = `http://localhost:8080/?theme=dark&uid=${userId}`;
            break;
          default:
            window.location.href = finalWorkspace
              ? `https://${finalWorkspace}.thub.tech/?theme=dark&uid=${userId}`
              : `https://beta.thub.tech/?theme=dark&uid=${userId}`;
            break;
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signInValidationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="">
          <div className="space-y-10">
            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <GoMail />
                </span>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
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
                  className="block w-full pl-12 pr-2 py-3 dark:text-background dark:bg-secondary border shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark rounded-md text-lg focus:ring-1"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-5 cursor-pointer dark:text-secondary-dark"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
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
      )}
    </Formik>
  );
};

export default SignIn;

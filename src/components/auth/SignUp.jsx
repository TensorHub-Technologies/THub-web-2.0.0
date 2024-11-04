import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { signUpValidationSchema } from "../../schemas/signUpValidationSchema";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    console.log("Form Data", values);

    if (values.password === values.confirmPassword) {
      const email = values.email;
      const firstName = values.firstName;
      const lastName = values.lastName;
      const phone = values.phoneNumber;
      const password = values.password;

      const today = new Date();
      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const subscription_date = year + "-" + month + "-" + date;

      const subscription_type = "free";
      const login_type = "email";
      const subscription_duration = "yearly";
      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:2000/user"
          : "https://thub-web-ser-2-0ls-dot-thub-dev-420204.uc.r.appspot.com/user";
      try {
        const response = await axios.post(apiUrl, {
          email,
          firstName,
          lastName,
          phone,
          password,
          login_type,
          subscription_type,
          subscription_duration,
          subscription_date,
        });

        if (response.status === 200) {
          console.log(response.status, "response status");
          console.log("user inserted successfully");
          const { userId, workspace } = response.data;
          console.log(userId, workspace);
          const finalWorkspace = workspace === null ? "beta" : workspace;
          console.log("finalWorkspace: ", finalWorkspace);
          console.log("data?.workspace: ", workspace);
          const mode = localStorage.getItem("isDarkMode") === "true";
          console.log(mode);
          const theme = mode ? "dark" : "lite";
          switch (window.location.hostname) {
            case "localhost":
              window.location.href = `http://localhost:8080/?theme=${theme}&uid=${userId}`;
              break;
            default:
              window.location.href = finalWorkspace
                ? `https://${finalWorkspace}.thub.tech/?theme=${theme}&uid=${userId}`
                : `https://beta.thub.tech/?theme=${theme}&uid=${userId}`;
              break;
          }
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signUpValidationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="">
          <div className="space-y-8">
            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <AiOutlineUser />
                </span>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
                />
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <AiOutlineUser />
                </span>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <GoMail />
                </span>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <BsPhone />
                </span>
                <Field
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
                />
              </div>
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <CiLock />
                </span>
                <Field
                  type={showPassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
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

            <div className="">
              <div className="relative">
                <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                  <CiLock />
                </span>
                <Field
                  type={showConfirmPassword ? "password" : "text"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="block w-full pl-12 pr-2 py-3  dark:text-background dark:bg-secondary border  shadow-md border-secondary-dark placeholder-secondary-dark focus:outline-none dark:focus:border-primary-dark focus:border-primary focus:ring-primary  dark:focus:ring-primary-dark  rounded-md text-lg focus:ring-1"
                />
                <span
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 top-5 cursor-pointer dark:text-secondary-dark"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1 absolute"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary dark:bg-primary-dark text-white dark:text-secondary rounded-lg hover:bg-[#31519b] dark:hover:bg-[#e65ca8]"
            >
              Sign Up for Free
            </button>
          </div>

          <div className="text-center mt-2">
            <span className="text-gray-600 dark:text-secondary-dark -ml-6 mr-2">
              Already have an account?
            </span>
            <Link
              to="/auth/login"
              className="text-primary dark:text-primary-dark mr-1 "
            >
              Sign In
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;

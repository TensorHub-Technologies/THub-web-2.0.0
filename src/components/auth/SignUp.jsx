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
import Modal from "react-modal";

Modal.setAppElement("#root");
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [tempUserData, setTempUserData] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const apiUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:2000"
      : "https://thub-web-ser-2-0-dot-thub-dev-420204.uc.r.appspot.com";

  const checkEmail = async (email) => {
    console.log(apiUrl);
    console.log("Checkemail function executed");
    try {
      const response = await axios.post(`${apiUrl}/check-email`, { email });
      return response.data.exists;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  // Send OTP to the user's email
  const sendOtp = async (email) => {
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/send-otp`, { email });
      if (response.status === 200) {
        setOtpSent(true);
        setShowModal(true);
        setEmail(email);
        alert("OTP sent to your email.");
      } else {
        console.error("Failed to send OTP:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  // Verify the OTP
  const verifyOtp = async (otp) => {
    console.log("Verifying OTP for email:", email);
    console.log("OTP provided:", otp);
    try {
      const response = await axios.post(`${apiUrl}/verify-otp`, { email, otp });
      if (response.status === 200) {
        alert("OTP verified successfully!");
        setShowModal(true);
        return true;
      } else {
        alert("Invalid OTP. Please try again.");
        return false;
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return false;
    }
  };

  const handleResendOtp = () => {
    setOtp("");
    setOtpSent(false);
    sendOtp(email);
  };

  const handleSubmit = async (values) => {
    if (!otpSent) {
      const emailExists = await checkEmail(values.email);
      if (emailExists) return alert("Email is already in use.");

      setTempUserData(values);
      await sendOtp(values.email);
      return;
    }
  };

  const handleOtpVerification = async () => {
    const otpVerified = await verifyOtp(otp);
    if (!otpVerified)
      return alert("OTP verification failed. Please try again.");

    const payload = {
      email: tempUserData.email,
      firstName: tempUserData.firstName,
      lastName: tempUserData.lastName,
      phone: tempUserData.phoneNumber,
      password: tempUserData.password,
      subscription_type: "free",
      login_type: "email",
      subscription_duration: "yearly",
      subscription_date: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await axios.post(`${apiUrl}/user`, payload);
      if (response.status === 200) {
        const { userId, workspace } = response.data;
        const finalWorkspace = workspace || "beta";
        const theme =
          localStorage.getItem("isDarkMode") === "true" ? "dark" : "lite";
        switch (window.location.hostname) {
          case "localhost":
            window.location.href = `http://localhost:8080/?theme=${theme}&uid=${userId}`;
            break;
          default:
            window.location.href = `https://${finalWorkspace}.thub.tech/?theme=${theme}&uid=${userId}`;
            break;
        }
      }
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setShowModal(false);
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
            {showModal && (
              <Modal
                isOpen={otpSent}
                onRequestClose={() => setShowModal(false)}
                contentLabel="OTP Verification"
                className="otp-modal bg-primary dark:bg-primary-dark h-full flex flex-col justify-center items-center mt-10"
              >
                <h2>Enter OTP</h2>
                <Field
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  className="block w-[30%] pl-12 py-3 border-4 border-black"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <ErrorMessage
                  name="otp"
                  component="div"
                  className="text-red-500"
                />

                <div className="flex justify-between mt-4 gap-10">
                  <button
                    onClick={handleResendOtp}
                    className=" rounded-lg border-2 border-black p-3 bg-white text-black hover:bg-primary shadow-lg  hover:text-white"
                  >
                    Resend OTP
                  </button>
                  <button
                    onClick={handleOtpVerification}
                    className=" px-4 py-2 rounded-lg border-2 border-black  bg-white text-black  hover:bg-primary shadow-lg hover:text-white"
                  >
                    Continue
                  </button>
                </div>
              </Modal>
            )}

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
              {!otpSent && (
                <div>
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
              )}
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
              {loading ? "Sending OTP..." : "Sign Up"}
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

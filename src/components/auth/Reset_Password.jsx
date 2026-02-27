import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LeftImage from "./LeftImage";
import { MdOutlineClose } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const { token } = useParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [uid, setUid] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("uid");
    if (userId) {
      setUid(userId);
    } else {
      setError("User ID is missing from the URL.");
    }
  }, [token]);

  useEffect(() => {
    if (success) {
      toast.success(`${success}`, {
        position: "bottom-left",
        style: { width: "430px", whiteSpace: "nowrap" },
        theme: "colored",
      });
    }
    if (error) {
      toast.error(`${error}`, {
        position: "bottom-left",
        style: { width: "500px", whiteSpace: "nowrap" },
        theme: "colored",
      });
    }
  }, [success, error]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const apiUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:2000"
          : window.location.hostname ===
              "thub-web.lemonpond-e68ea8b7.westus2.azurecontainerapps.io"
            ? "https://thub-server.lemonpond-e68ea8b7.westus2.azurecontainerapps.io"
            : "https://thub-server.wittycoast-8619cdd6.westus2.azurecontainerapps.io";

      const response = await axios.post(`${apiUrl}/reset-password/${token}`, {
        token,
        uid,
        newPassword: values.password,
      });

      if (response.status === 200) {
        setSuccess("Password reset successfully! Redirecting to login...");
        setTimeout(() => navigate("/auth/login"), 3000);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
  });

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-background dark:bg-secondary overflow-hidden">
      <div className="flex justify-center items-center bg-background dark:bg-secondary p-4 md:p-0">
        <div className="text-white text-center">
          <LeftImage />
        </div>
      </div>
      <div className="absolute right-0 pr-6 top-12">
        <button
          className="border dark:border-primary-dark dark:text-secondary dark:bg-primary-dark p-2 rounded-lg border-primary bg-primary text-background"
          onClick={handleClick}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>

      <div className="flex justify-center h-full">
        <div className="reset-password-container mt-1 md:mt-36">
          <h1 className="text-center dark:text-background text-background-dark">
            Reset Password
          </h1>
          <Formik
            initialValues={{ password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="mt-4 flex flex-col items-center">
                <div className="mb-4 mt-7">
                  <div className="relative">
                    <span className="absolute left-4 top-[18px] dark:text-secondary-dark">
                      <CiLock />
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
                <button
                  type="submit"
                  disabled={loading}
                  className="dark:bg-primary-dark bg-primary text-white rounded-lg py-3 px-6 w-full dark:hover:bg-pink-600  hover:bg-blue-900 transition duration-300 mt-4"
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
                <ToastContainer />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

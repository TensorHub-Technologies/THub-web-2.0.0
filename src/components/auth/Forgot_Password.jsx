import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import LeftImage from "./LeftImage";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/userSlice";

function Forgot_Password() {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
  };

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (values) => {
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:2000/send_recovery_email"
        : "https://thub-web-ser-2-0ls-dot-thub-dev-420204.uc.r.appspot.com/send_recovery_email";

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(apiUrl, {
        recipient_email: values.email,
      });
      if (response.status === 200) {
        setEmailSent(true);
        dispatch(setEmail(values.email));
        navigate("/auth/otp");
      }
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      setError("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-background dark:bg-secondary">
        <div className="flex justify-center bg-background dark:bg-secondary p-4 md:p-0">
          <div className="text-white text-center">
            <LeftImage />
          </div>
        </div>

        <div className="grid grid-rows-2 dark:bg-secondary">
          <div className="flex relative justify-between bg-background dark:bg-secondary py-6">
            <div className="absolute right-0 pr-6 top-12">
              <button
                className="border dark:border-primary-dark dark:text-secondary dark:bg-primary-dark p-2 rounded-lg border-primary bg-primary text-background"
                onClick={handleClick}
              >
                <MdOutlineClose size={24} />
              </button>
            </div>

            <div className="w-[90%] h-screen flex justify-center items-center">
              <div className="w-96">
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-6">
                      <div className="relative">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-2 border rounded"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 mt-1"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading || isSubmitting}
                        className={`w-full py-2 text-white rounded ${
                          loading ? "bg-gray-400" : "bg-blue-500"
                        }`}
                      >
                        {loading ? "Sending..." : "Send OTP"}
                      </button>

                      {emailSent && (
                        <p className="text-green-500 mt-2">
                          OTP sent! Check your email.
                        </p>
                      )}

                      {error && <p className="text-red-500 mt-2">{error}</p>}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot_Password;

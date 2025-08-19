import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { contactValidationSchema } from "../../schemas/contactValidationSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    setError("");
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:2000"
        : "https://thub-web-server-2-0-378678297066.us-central1.run.app";

    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/api/contactmail`, {
        values,
      });

      if (response.status === 200) {
        toast.success("Our team will contact you shortly!", {
          position: "bottom-left",
          style: { whiteSpace: "nowrap" },
          theme: "colored",
        });
        resetForm();
      }
    } catch (error) {
      console.error("Error sending contact form:", error.message);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        mobileNumber: "",
        YourMessage: "",
      }}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <div className="flex items-center justify-center min-h-screen">
          <Form className="py-16 w-full max-w-md">
            <div className="mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-lg text-start font-medium text-secondary dark:text-secondary-dark mb-2 -ml-0"
                >
                  Your Name*
                </label>
                <div className="relative">
                  <span className="absolute left-2 top-3 dark:text-secondary-dark">
                    <AiOutlineUser />
                  </span>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="What's your name?"
                    className="block w-full border border-gray-300 dark:bg-secondary rounded-md pl-8 pr-2 py-2 dark:text-background"
                  />
                </div>
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg text-start font-medium text-secondary dark:text-secondary-dark mb-2 -ml-0"
                >
                  Email*
                </label>
                <div className="relative">
                  <span className="absolute left-2 top-3 dark:text-secondary-dark">
                    <GoMail />
                  </span>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="block w-full border border-gray-300 dark:bg-secondary rounded-md pl-8 pr-2 py-2 dark:text-background"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="mobileNumber"
                  className="text-lg text-start font-medium text-secondary dark:text-secondary-dark mb-2 -ml-0"
                >
                  Mobile Number*
                </label>
                <div className="relative">
                  <span className="absolute left-2 top-3 dark:text-secondary-dark">
                    <FiPhoneCall />
                  </span>
                  <Field
                    type="text"
                    name="mobileNumber"
                    placeholder="Phone Number"
                    className="block w-full border border-gray-300 dark:bg-secondary rounded-md pl-8 pr-2 py-2 dark:text-background"
                  />
                </div>
                <ErrorMessage
                  name="mobileNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="YourMessage"
                  className="text-lg text-start font-medium text-secondary dark:text-secondary-dark mb-2 -ml-0"
                >
                  Your Message*
                </label>
                <Field
                  as="textarea"
                  name="YourMessage"
                  placeholder="Write here your detailed message"
                  className="mt-1 block w-full border border-secondary-dark dark:bg-secondary rounded-md p-2 dark:text-background"
                  rows="4"
                />
                <ErrorMessage
                  name="YourMessage"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-36 py-3 px-6 bg-primary dark:bg-primary-dark text-white dark:text-secondary rounded-lg hover:bg-[#31519b] dark:hover:bg-[#e65ca8] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {error && <div className="text-red-500 text-sm mt-4">{error}</div>}

            <ToastContainer />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;

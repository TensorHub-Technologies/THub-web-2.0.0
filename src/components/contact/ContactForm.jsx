import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { contactValidationSchema } from "../../schemas/contactValidationSchema";

const ContactForm = () => {
  const handleSubmit = (values) => {
    console.log("Form Data", values);
    // Handle form submission (e.g., send to API)
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
        <Form className="max-w-lg mx-auto py-16">
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-secondary mb-2"
              htmlFor="firstName"
            >
              Your Name*
            </label>
            <div className="relative">
              <span className="absolute left-2 top-3">
                <AiOutlineUser />
              </span>
              <Field
                type="text"
                name="firstName"
                placeholder="What's your name?"
                className="block w-full border border-gray-300 rounded-md pl-8 pr-2 py-2"
              />
            </div>
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-secondary mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <div className="relative">
              <span className="absolute left-2 top-3">
                <GoMail />
              </span>

              <Field
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="block w-full border border-gray-300 rounded-md pl-8 pr-2 py-2"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-secondary mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number*
            </label>
            <div className="relative">
              <span className="absolute left-2 top-3">
                <FiPhoneCall />
              </span>
              <Field
                type="text"
                name="mobileNumber"
                placeholder="Phone Number"
                className="block w-full border border-gray-300 rounded-md pl-8 pr-2 py-2"
              />
            </div>
            <ErrorMessage
              name="mobileNumber"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-secondary mb-2"
              htmlFor="YourMessage"
            >
              Your Message*
            </label>
            <Field
              as="textarea"
              name="YourMessage"
              placeholder="    Write here your details message"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="4"
            />
            <ErrorMessage
              name="YourMessage"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-44 py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

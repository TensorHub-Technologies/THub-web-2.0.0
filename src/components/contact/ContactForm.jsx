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
              className="block text-lg font-medium text-secondary  dark:text-secondary-dark mb-2"
              htmlFor="firstName"
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
                className="block w-full border border-gray-300  dark:bg-secondary rounded-md pl-8 pr-2 py-2 dark:text-background"
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
              className="block text-lg font-medium text-secondary  dark:text-secondary-dark mb-2"
              htmlFor="email"
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
                className="block w-full border border-gray-300  dark:bg-secondary rounded-md pl-8 pr-2 py-2 dark:text-background"
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
              className="block text-lg font-medium text-secondary  dark:text-secondary-dark mb-2"
              htmlFor="mobileNumber"
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
                className="block w-full border border-gray-300  dark:bg-secondary rounded-md pl-8 pr-2 py-2 dark:text-background"
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
              className="block text-lg font-medium text-secondary  dark:text-secondary-dark mb-2"
              htmlFor="YourMessage"
            >
              Your Message*
            </label>
            <Field
              as="textarea"
              name="YourMessage"
              placeholder="    Write here your details message"
              className="mt-1 block w-full border border-secondary-dark dark:bg-secondary rounded-md p-2 dark:text-background"
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
            className="w-36 py-3 px-6  bg-primary dark:bg-primary-dark text-white dark:text-secondary  rounded-lg hover:bg-[#31519b] dark:hover:bg-[#e65ca8]"
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

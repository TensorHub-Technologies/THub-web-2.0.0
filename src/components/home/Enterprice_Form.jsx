import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { useEffect, useRef } from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { PiSuitcaseSimple } from "react-icons/pi";
import { TbFileDescription } from "react-icons/tb";

const Enterprice_Form = ({ setShowForm, handleSubmit }) => {
  const formRef = useRef(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    designation: "",
    email: "",
    contactNumber: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    designation: Yup.string().required("Designation is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be at least 10 digits")
      .required("Contact Number is required"),
    description: Yup.string().required("Description is required"),
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowForm]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4 py-6">
      <div
        ref={formRef}
        className="bg-white dark:bg-secondary p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
            setShowForm(false);
          }}
        >
          {() => (
            <Form>
              <ToastContainer />
              <h2 className="text-xl font-semibold text-center mb-4 dark:text-white ">
                Enterprise Inquiry Form
              </h2>
              <div className="space-y-4">
                {/* First Name */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <AiOutlineUser />
                  </span>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="block w-full pl-10  dark:text-white py-2 border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Last Name */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <AiOutlineUser />
                  </span>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="block w-full pl-10 py-2  dark:text-white border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Company Name */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <HiOutlineBuildingOffice />
                  </span>
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="block w-full pl-10 py-2  dark:text-white border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Designation */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <PiSuitcaseSimple />
                  </span>
                  <Field
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    className="block w-full pl-10 py-2  dark:text-white border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="designation"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <AiOutlineMail />
                  </span>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full pl-10 py-2 dark:text-white  border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Contact Number */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <AiOutlinePhone />
                  </span>
                  <Field
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    className="block w-full pl-10 py-2 dark:text-white  border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="contactNumber"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Description */}
                <div className="relative">
                  <span className="absolute left-4 top-[12px] dark:text-white">
                    <TbFileDescription />
                  </span>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Details of what you want from TensorHub"
                    rows="4"
                    className="block w-full pl-10 py-2 dark:text-white  border rounded-md dark:bg-black dark:focus:border-primary-dark focus:border-primary focus:ring-primary dark:focus:ring-primary-dark"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-10 mt-4 space-x-2">
                <button
                  type="button"
                  className="px-10 py-2 hover:bg-primary border-primary hover:text-white text-primary dark:text-primary-dark dark:bg-black border hover:dark:bg-primary-dark hover:dark:text-black dark:border-primary-dark rounded-lg"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-2 hover:bg-primary border-primary hover:text-white text-primary dark:text-primary-dark dark:bg-black border hover:dark:bg-primary-dark hover:dark:text-black dark:border-primary-dark rounded-lg"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

Enterprice_Form.propTypes = {
  handleSubmit: PropTypes.func,
  setShowForm: PropTypes.isRequired,
};
export default Enterprice_Form;

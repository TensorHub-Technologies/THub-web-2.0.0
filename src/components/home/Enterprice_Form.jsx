import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Enterprice_Form = ({ setShowForm, handleLoading, handleError }) => {
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

  const handleSubmit = async (values, resetForm) => {
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:2000"
        : "https://thub-server.wittycoast-8619cdd6.westus2.azurecontainerapps.io";

    try {
      const response = await axios.post(`${apiUrl}/enterprice-mail`, values);
      if (response.status === 200 || response.status === "ok") {
        handleLoading("We'll reach out shortly!");
        resetForm();
        setShowForm(false);
      }
    } catch (error) {
      handleError("Form Submission Failed");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4 py-6">
      <div
        ref={formRef}
        className="bg-white dark:bg-secondary p-6 rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto "
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {() => (
            <Form>
              <h2 className="text-3xl font-semibold text-primary dark:text-primary-dark text-left mb-8">
                Enterprise Inquiry Form
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="relative z-0 w-full group">
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="block px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="firstName"
                      className="peer-focus:text-lg peer-hover:text-primary dark:peer-hover:text-primary-dark absolute pl-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y peer-focus:scale-75 peer-focus:-translate-y-14"
                    >
                      First Name
                    </label>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="relative z-0 w-full group">
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="block px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="lastName"
                      className="peer-focus:text-lg peer-hover:text-primary dark:peer-hover:text-primary-dark absolute pl-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y peer-focus:scale-75 peer-focus:-translate-y-14"
                    >
                      Last Name
                    </label>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>
                {[
                  "companyName",
                  "designation",
                  "email",
                  "contactNumber",
                  "description",
                ].map((fieldName) => (
                  <div key={fieldName} className="relative z-0 w-full group">
                    {fieldName === "description" ? (
                      <Field
                        as="textarea"
                        name={fieldName}
                        id={fieldName}
                        rows="4"
                        className="block px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                    ) : (
                      <Field
                        type={fieldName === "email" ? "email" : "text"}
                        name={fieldName}
                        id={fieldName}
                        className="block px-0 w-full text-lg text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                    )}
                    <label
                      htmlFor={fieldName}
                      className={
                        fieldName === "email"
                          ? "peer-focus:text-lg absolute pl-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 origin-[0] peer-focus:left-0 peer-hover:text-primary peer-focus:text-primary dark:peer-hover:text-primary-dark peer-focus:dark:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y peer-focus:scale-75 peer-focus:-translate-y-14 left-[-16px]"
                          : "peer-focus:text-lg absolute pl-0 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 origin-[0] peer-focus:left-0 peer-hover:text-primary peer-focus:text-primary dark:peer-hover:text-primary-dark peer-focus:dark:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y peer-focus:scale-75 peer-focus:-translate-y-14"
                      }
                    >
                      {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    </label>
                    <ErrorMessage
                      name={fieldName}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-10 mt-4 space-x-2">
                <button
                  type="button"
                  className="px-10 py-2 border-primary hover:bg-gray-100 text-primary dark:text-primary-dark dark:bg-secondary border  dark:border-primary-dark rounded-lg"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-10 py-2 hover:bg-blue-900 bg-primary dark:bg-primary-dark text-white border-primary hover:text-white  border hover:dark:bg-primary-dark hover:dark:text-black dark:border-primary-dark shadow-lg rounded-lg"
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
  setShowForm: PropTypes.func.isRequired,
  handleLoading: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
};

export default Enterprice_Form;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const StudentDetails_Form = ({
  courseName,
  setShowForm,
  handleLoading,
  handleError,
}) => {
  const formRef = useRef(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    course: courseName || "",
    current_status: "",
    collegeName: "",
    companyName: "",
    designation: "",
    description: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    course: Yup.string().required("Enter the course name"),
    current_status: Yup.string().required("Current status is required"),

    collegeName: Yup.string().when("current_status", {
      is: "Student",
      then: (schema) => schema.required("College name is required"),
    }),

    companyName: Yup.string().when("current_status", {
      is: "Working Professional",
      then: (schema) => schema.required("Company name is required"),
    }),

    designation: Yup.string().when("current_status", {
      is: "Working Professional",
      then: (schema) => schema.required("Designation is required"),
    }),

    description: Yup.string().required("Please tell us why you want to join"),
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowForm]);

  const handleSubmit = async (values, resetForm) => {
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:2000"
        : "https://thub-server.wittycoast-8619cdd6.westus2.azurecontainerapps.io";

    try {
      await axios.post(`${apiUrl}/api/student-enroll`, values);
      handleLoading("Form submitted successfully");
      resetForm();
      setShowForm(false);
    } catch (error) {
      handleError("Form Submission Failed");
      console.error(error);
    }
  };

  const inputClass =
    "block px-0 w-full text-lg bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer";

  const labelClass =
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-7 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y peer-focus:scale-75 peer-focus:-translate-y-14";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-4">
      <div
        ref={formRef}
        className="bg-white dark:bg-secondary p-6 rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {({ values }) => (
            <Form className="space-y-6">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Student Enrollment Form
              </h2>

              {/* First & Last Name */}
              <div className="flex gap-6">
                {["firstName", "lastName"].map((field) => (
                  <div key={field} className="relative z-0 w-full group">
                    <Field
                      name={field}
                      className={inputClass}
                      placeholder=" "
                    />
                    <label className={labelClass}>
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="relative z-0 w-full group">
                <Field
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder=" "
                />
                <label className={labelClass}>Email</label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* course */}
              <div className="relative z-0 w-full group">
                <Field
                  name="course"
                  type="text"
                  className={`${inputClass} cursor-not-allowed text-gray-600 bg-gray-100 dark:text-[#7D838E]`}
                  readOnly
                />
              </div>

              {/* Status */}
              <div className="relative z-0 w-full group">
                <Field
                  as="select"
                  name="current_status"
                  className={`${inputClass} appearance-none pr-8 text-gray-600 dark:text-[#7D838E]`}
                >
                  <option value="">Current Status</option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">
                    Working Professional
                  </option>
                  <option value="Fresher">Fresher</option>
                </Field>

                {/* Dropdown Arrow */}
                <div className="pointer-events-none absolute right-0 top-3 -translate-y-1/2 pr-2 text-gray-500">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  >
                    <path
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>

                <ErrorMessage
                  name="current_status"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Conditional Fields */}
              {values.current_status === "Student" && (
                <div className="relative z-0 w-full group">
                  <Field
                    name="collegeName"
                    className={inputClass}
                    placeholder=" "
                  />
                  <label className={labelClass}>College Name</label>
                  <ErrorMessage
                    name="collegeName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              {values.current_status === "Working Professional" && (
                <>
                  <div className="relative z-0 w-full group">
                    <Field
                      name="companyName"
                      className={inputClass}
                      placeholder=" "
                    />
                    <label className={labelClass}>Company Name</label>
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="relative z-0 w-full group">
                    <Field
                      name="designation"
                      className={inputClass}
                      placeholder=" "
                    />
                    <label className={labelClass}>Designation</label>
                    <ErrorMessage
                      name="designation"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </>
              )}

              {/* Reason */}
              <div className="relative z-0 w-full group">
                <Field
                  as="textarea"
                  name="description"
                  rows="4"
                  className={inputClass}
                  placeholder=" "
                />
                <label className={labelClass}>
                  Why do you want to join this course?
                </label>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-8 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-8 py-2 border rounded-lg dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-primary text-white rounded-lg"
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

StudentDetails_Form.propTypes = {
  setShowForm: PropTypes.func.isRequired,
  handleLoading: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  courseName: PropTypes.string.isRequired,
};

export default StudentDetails_Form;

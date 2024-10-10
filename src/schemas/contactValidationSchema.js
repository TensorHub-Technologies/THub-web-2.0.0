import * as yup from "yup";
export const contactValidationSchema = yup.object({
  firstName: yup.string().min(3).required("First Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber: yup
    .number()
    .positive("Mobile Number must be positive")
    .integer("Mobile Number must be an integer")
    .required("Mobile Number is required"),
  YourMessage: yup.string().required("Message is required"),
});

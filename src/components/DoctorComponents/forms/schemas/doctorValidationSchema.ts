import * as Yup from "yup";

const doctorValidationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  IMAId: Yup.string().required("IMID is required"),
  specialization: Yup.string().required("Specialization is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default doctorValidationSchema;

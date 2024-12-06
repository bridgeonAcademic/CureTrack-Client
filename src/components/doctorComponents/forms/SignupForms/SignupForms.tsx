"use client"
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Formik, Form } from "formik";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import doctorValidationSchema from "../schemas/doctorValidationSchema";
import useDoctorSignup from "@/hooks/useAuth/useDoctorAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const DoctorSignupForm = () => {
  const [isClient, setIsClient] = useState(false);
  const { doctorSignUp, isLoading, isError, isSuccess, error } = useDoctorSignup();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full mx-auto">
      <Formik
        initialValues={{
          fullName: "",
          IMAId: "",
          specialization: "",
          email: "",
          password: "",
        }}
        validationSchema={doctorValidationSchema}
        onSubmit={(values, { resetForm }) => {
          doctorSignUp(values ,{
            onSuccess: () => {
              resetForm();
              toast.success("Please verify your email with the OTP sent");
              router.push(`/otp-verification?email=${encodeURIComponent(values.email)}`);
            }
          })
        }}
      >
        {() => (
          <Form className="space-y-5 text-start">
            <InputField label="Full Name" name="fullName" icon={FaUser} placeholder="Full Name" />
            <InputField label="IMAID" name="IMAId" icon={FaLock} placeholder="Enter your IMAID" />
            <InputField label="Specialization" name="specialization" icon={FaUser} placeholder="Specialization" />
            <InputField label="Email" name="email" icon={FaEnvelope} type="email" placeholder="Email" />
            <InputField label="Password" name="password" icon={FaLock} type="password" placeholder="Password" />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800 shadow-md transition duration-300"
            >
              {isLoading ? "Signing up..." : "Get Started"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DoctorSignupForm;

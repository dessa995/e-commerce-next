import RegisterForm from "@/components/Organisms/Register-form/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="w-4/12 mx-auto bg-orange-200 p-6 rounded-xl shadow-md">
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;

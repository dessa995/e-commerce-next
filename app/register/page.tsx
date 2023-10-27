"use client";
import Header from "@/components/Organisms/Header/Header";
import RegisterForm from "@/components/Organisms/Register-form/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="w-4/12 mx-auto bg-orange-200 p-6 rounded-xl shadow-md">
        <RegisterForm />
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;

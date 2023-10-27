"use client";
import React from "react";

import LoginForm from "../../components/Organisms/Login-form/LoginForm";
import Header from "@/components/Organisms/Header/Header";

const LoginPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="w-4/12 mx-auto bg-orange-200 p-6 rounded-xl shadow-md">
        <LoginForm />
      </div>
    </React.Fragment>
  );
};

export default LoginPage;

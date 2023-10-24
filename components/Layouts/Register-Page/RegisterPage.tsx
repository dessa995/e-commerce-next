import RegisterForm from "@/components/Organisms/Register-form/RegisterForm";
import React from "react";

type RegisterPageProps = {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterPage = ({ hasAccount, setHasAccount }: RegisterPageProps) => {
  return (
    <>
      <div className="w-4/12 mx-auto bg-orange-200 p-6 rounded-xl shadow-md">
        <RegisterForm setHasAccount={setHasAccount} hasAccount={hasAccount} />
      </div>
    </>
  );
};

export default RegisterPage;

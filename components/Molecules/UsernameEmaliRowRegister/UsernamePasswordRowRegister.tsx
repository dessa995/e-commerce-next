import EmailInput from "@/components/Atoms/Email-input/EmailInput";
import PasswordInput from "@/components/Atoms/Password-input/PasswordInput";
import UsernameInput from "@/components/Atoms/Username-input/UsernameInput";
import React from "react";

const UsernamePasswordRowRegister = () => {
  return (
    <div className="flex flex-col gap-2">
      <UsernameInput />
      <PasswordInput />
    </div>
  );
};

export default UsernamePasswordRowRegister;

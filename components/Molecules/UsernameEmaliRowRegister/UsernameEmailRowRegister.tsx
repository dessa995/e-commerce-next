import EmailInput from "@/components/Atoms/Email-input/EmailInput";
import UsernameInput from "@/components/Atoms/Username-input/UsernameInput";
import React from "react";

const UsernameEmailRowRegister = () => {
  return (
    <div className="flex gap-1">
      <UsernameInput />
      <EmailInput />
    </div>
  );
};

export default UsernameEmailRowRegister;

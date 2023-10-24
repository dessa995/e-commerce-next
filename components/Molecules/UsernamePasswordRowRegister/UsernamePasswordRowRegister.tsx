import EmailInput from "@/components/Atoms/Email-input/EmailInput";
import PasswordInput from "@/components/Atoms/Password-input/PasswordInput";
import UsernameInput from "@/components/Atoms/Username-input/UsernameInput";
import React from "react";

type LoginFormProps = {
  hasAccount: boolean;
};

const UsernamePasswordRowRegister = (
  { register, errors }: any,
  { hasAccount }: LoginFormProps
) => {
  console.log(hasAccount);

  return (
    <div className="flex flex-col gap-2">
      <UsernameInput register={register} errors={errors} />
      <PasswordInput
        register={register}
        errors={errors}
        hasAccount={hasAccount}
      />
    </div>
  );
};

export default UsernamePasswordRowRegister;

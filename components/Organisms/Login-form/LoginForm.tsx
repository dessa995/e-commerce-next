import React, { useState } from "react";
import { useForm } from "react-hook-form";

import UsernamePasswordRowRegister from "@/components/Molecules/UsernamePasswordRowRegister/UsernamePasswordRowRegister";

type LoginFormProps = {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ hasAccount, setHasAccount }: LoginFormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const formData = watch();
  const formSubmit = (data: any) => {
    console.log(data);
    setShow(true);
  };

  console.log(hasAccount);

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-5 text-orange-900">Login</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(formSubmit)}>
        <UsernamePasswordRowRegister
          register={register}
          errors={errors}
          hasAccount={hasAccount}
        />
        <button
          className="w-6/12 self-center p-2 font-bold text-lg text-orange-950 hover:text-orange-300 rounded-lg bg-orange-300 hover:bg-orange-800 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        Don't have an Account yet?{" "}
        <button
          className="text-orange-600 text-sm hover:text-orange-800 transition-all mt-4"
          onClick={() => {
            setHasAccount(false);
          }}
        >
          Register Here
        </button>
      </p>
    </div>
  );
};

export default LoginForm;

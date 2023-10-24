import React, { useState } from "react";
import { useForm } from "react-hook-form";

import NameRowRegister from "../../Molecules/Register-Name-row/RegisterNameRow";
import UsernamePasswordRowRegister from "@/components/Molecules/UsernamePasswordRowRegister/UsernamePasswordRowRegister";
import ChoosePrivateRadio from "@/components/Atoms/Choose-private-radio/ChoosePrivateRadio";
import ChooseGenderRadio from "@/components/Atoms/Choose-Gender/ChooseGenderRadio";
import EmailInput from "@/components/Atoms/Email-input/EmailInput";
// import ConfirmPasswordInut from "@/components/Atoms/Password-input/ConfirmPasswordInut";

type RegisterFormProps = {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ setHasAccount, hasAccount }: RegisterFormProps) => {
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

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-5 text-orange-900">Registration</h2>
      <form
        className="flex flex-col gap-2 w-11/12"
        onSubmit={handleSubmit(formSubmit)}
      >
        <ChoosePrivateRadio />
        <NameRowRegister register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <div className="flex flex-col items-cente my-10">
          <UsernamePasswordRowRegister
            register={register}
            errors={errors}
            hasAccount={hasAccount}
          />
          {/* <ConfirmPasswordInut /> */}
        </div>
        <ChooseGenderRadio />
        <p className="text-orange-900">
          By submiting your registration you agree on our{" "}
          <a
            href="#"
            className="text-orange-600 hover:text-orange-800 transition-all"
          >
            Privacy Policy
          </a>
        </p>
        <button
          className="w-6/12 self-center p-2 font-bold text-lg text-orange-950 hover:text-orange-300 rounded-lg bg-orange-300 hover:bg-orange-800 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        Already have an Account?{" "}
        <button
          className="text-orange-600 text-sm hover:text-orange-800 transition-all mt-4"
          onClick={() => setHasAccount(true)}
        >
          Login Here
        </button>{" "}
      </p>
    </div>
  );
};

export default RegisterForm;

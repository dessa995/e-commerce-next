import React from "react";
import NameRowRegister from "../../Molecules/Register-Name-row/RegisterNameRow";
import UsernameEmailRowRegister from "@/components/Molecules/UsernameEmaliRowRegister/UsernameEmailRowRegister";
import ChoosePrivateRadio from "@/components/Atoms/Choose-private-radio/ChoosePrivateRadio";
import ChooseGenderRadio from "@/components/Atoms/Choose-Gender/ChooseGenderRadio";

const RegisterForm = () => {
  return (
    <div>
      <h2>Registration</h2>
      <form className="flex flex-col gap-2">
        <ChoosePrivateRadio />
        <NameRowRegister />
        <UsernameEmailRowRegister />
        <ChooseGenderRadio />
        <p>
          By submiting your registration you agree on our{" "}
          <a href="#">Privacy Policy</a>
        </p>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

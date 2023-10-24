import React from "react";
import FirstNameInput from "../../Atoms/First-name-input/FirstN/FirstNameInput";
import LastNameInput from "@/components/Atoms/Last-Name-Input/LastNameInput";

const NameRowRegister = ({ register, errors }: any) => {
  return (
    <div className="flex gap-2">
      <FirstNameInput register={register} errors={errors} />
      <LastNameInput register={register} errors={errors} />
    </div>
  );
};

export default NameRowRegister;

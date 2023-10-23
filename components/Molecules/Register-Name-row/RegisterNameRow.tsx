import React from "react";
import FirstNameInput from "../../Atoms/First-name-input/FirstN/FirstNameInput";
import LastNameInput from "@/components/Atoms/Last-Name-Input/LastNameInput";

const UsernameRowRegister = () => {
  return (
    <div className="flex flex-col gap-2">
      <FirstNameInput />
      <LastNameInput />
    </div>
  );
};

export default UsernameRowRegister;

import React from "react";

const ChooseGenderRadio = () => {
  return (
    <div className="flex gap-2">
      <label htmlFor="male">Male/Nonbinario</label>
      <input type="radio" name="gender" id="male" />
      <label htmlFor="female">Female/Nonbinaria</label>
      <input type="radio" name="gender" id="female" />
    </div>
  );
};

export default ChooseGenderRadio;

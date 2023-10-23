import React from "react";

const ChooseGenderRadio = () => {
  return (
    <div className="flex gap-2">
      <label htmlFor="male" className="text-orange-900">
        Male/Nonbinario
      </label>
      <input
        className="accent-orange-600 hover:cursor-pointer"
        type="radio"
        name="gender"
        id="male"
      />
      <label htmlFor="female" className="text-orange-900">
        Female/Nonbinaria
      </label>
      <input
        className="accent-orange-600 hover:cursor-pointer"
        type="radio"
        name="gender"
        id="female"
      />
    </div>
  );
};

export default ChooseGenderRadio;

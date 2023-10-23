import React from "react";

const ChoosePrivateRadio = () => {
  return (
    <div className="flex gap-2">
      <label htmlFor="private" className="text-orange-900">
        Private
      </label>
      <input
        type="radio"
        name="private-or-company"
        id="private"
        className="accent-orange-600 hover:cursor-pointer"
      />
      <label htmlFor="company" className="text-orange-900">
        Company
      </label>
      <input
        type="radio"
        name="private-or-company"
        id="company"
        className="accent-orange-600 hover:cursor-pointer "
      />
    </div>
  );
};

export default ChoosePrivateRadio;

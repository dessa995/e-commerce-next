import React from "react";

const ChoosePrivateRadio = () => {
  return (
    <div className="flex gap-2">
      <label htmlFor="private">Private</label>
      <input type="radio" name="private-or-company" id="private" />
      <label htmlFor="company">Company</label>
      <input type="radio" name="private-or-company" id="company" />
    </div>
  );
};

export default ChoosePrivateRadio;

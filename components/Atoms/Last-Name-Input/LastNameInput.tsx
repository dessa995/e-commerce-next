import React from "react";

const LastNameInput = () => {
  return (
    <>
      <input
        className="p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Your last name"
      />
    </>
  );
};

export default LastNameInput;

import React from "react";

const UsernameInput = () => {
  return (
    <>
      <input
        className="p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Your name"
      />
    </>
  );
};

export default UsernameInput;

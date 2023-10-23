import React from "react";

const EmailInput = () => {
  return (
    <>
      <input
        className="p-1 bg-transparent border-b border-orange-800 placeholder-amber-600 text-orange-900 outline-none"
        type="email"
        name="email"
        id="email"
        placeholder="Your E-mail"
      />
    </>
  );
};

export default EmailInput;

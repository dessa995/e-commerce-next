import UsernamePasswordRowRegister from "@/components/Molecules/UsernameEmaliRowRegister/UsernamePasswordRowRegister";
import React from "react";

type LoginFormProps = {
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ setHasAccount }: LoginFormProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-5 text-orange-900">Login</h2>
      <form className="flex flex-col gap-2">
        <UsernamePasswordRowRegister />
        <button
          className="w-6/12 self-center p-2 font-bold text-lg text-orange-950 hover:text-orange-300 rounded-lg bg-orange-300 hover:bg-orange-800 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        Don't have an Account yet?{" "}
        <button
          className="text-orange-600 text-sm hover:text-orange-800 transition-all mt-4"
          onClick={() => setHasAccount(false)}
        >
          Register Here
        </button>{" "}
      </p>
    </div>
  );
};

export default LoginForm;

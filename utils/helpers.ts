import { useForm } from "react-hook-form";

export const validateEmail = (value: string) => {
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (value.match(validRegex)) {
    return true;
  } else {
    return "Invalid email address";
  }
};

export const passwordMatch = (value: string) => {
  const { getValues } = useForm();
  const password = getValues("password");
  if (password === value) {
    return true;
  } else {
    return "Passwords should match!";
  }
};

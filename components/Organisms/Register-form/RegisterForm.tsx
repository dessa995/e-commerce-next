import Link from "next/link";
import { useForm, Controller } from "react-hook-form";

import styles from "./register-form.module.css";

const RegisterForm = () => {
  const {
    control,
    register,
    watch,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateEmail = (value: string) => {
    const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value.match(validRegex)) {
      return true;
    } else {
      return "Invalid email address";
    }
  };

  const passwordMatch = (value: string) => {
    const password = getValues("password");
    if (password === value) {
      return true;
    } else {
      return "Passwords should match!";
    }
  };

  const formData = watch();

  const formSubmit = (data: any) => {
    const { password, cpassword } = getValues();

    console.log(
      `passwords match ${password} ${cpassword} ${password === cpassword}`
    );
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className={styles.formHeading}>Registration</h2>
      <form
        className="flex flex-col gap-2 w-11/12"
        onSubmit={handleSubmit(formSubmit)}
      >
        {errors?.gender && <p className="text-red-600">Please select gender</p>}
        <div className="flex gap-2">
          <label htmlFor="male" className="text-orange-900">
            Male
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="accent-orange-600 hover:cursor-pointer"
                type="radio"
                id="male"
                value="male"
                {...register("gender", { required: true })}
              />
            )}
          />
          <label htmlFor="female" className="text-orange-900">
            Female
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="accent-orange-600 hover:cursor-pointer"
                type="radio"
                id="female"
                value="female"
                {...register("gender", { required: true })}
              />
            )}
          />
        </div>
        <input
          className={errors?.firstName ? styles.inputError : styles.input}
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
          placeholder={errors?.firstName ? "Name required" : "Your name"}
        />
        <input
          className={errors?.firstName ? styles.inputError : styles.input}
          type="text"
          id="lastName"
          {...register("lastName", { required: true })}
          placeholder={
            errors?.lastName ? "Last name required" : "Your last name"
          }
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required", validate: validateEmail }}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="email"
              placeholder={errors?.email ? "E-mail required" : "Your E-mail"}
              className={errors?.firstName ? styles.inputError : styles.input}
            />
          )}
        />
        {errors?.email && (
          <p className="text-red-600">
            {typeof errors.email === "string"
              ? errors.email
              : "Email adres invalid"}
          </p>
        )}
        <div className="flex flex-col items-cente my-10">
          <input
            className={errors?.firstName ? styles.inputError : styles.input}
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder="Your username"
          />
          <input
            className={errors?.firstName ? styles.inputError : styles.input}
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder={
              errors?.password ? "Password required" : "Your Password"
            }
          />
          <input
            className={errors?.firstName ? styles.inputError : styles.input}
            type="password"
            id="cPassword"
            {...register("cpassword", {
              required: true,
              validate: passwordMatch,
            })}
            placeholder={
              errors?.cpassword
                ? "Confirm Password is required"
                : "Confirm Your Password"
            }
          />
          {errors?.cpassword && (
            <p className="text-red-600">
              {typeof errors.cpassword === "string"
                ? errors.cpassword
                : "Passwords should match"}
            </p>
          )}
        </div>
        {errors?.affiliation && (
          <p className="text-red-600">Please select Affiliation</p>
        )}
        <div className="flex gap-2">
          <label htmlFor="private" className="text-orange-900">
            Private
          </label>
          <Controller
            name="affiliation"
            control={control}
            render={({ field }) => {
              return (
                <input
                  {...field}
                  type="radio"
                  id="private"
                  value="private"
                  className="accent-orange-600 hover:cursor-pointer"
                  {...register("affiliation", { required: true })}
                />
              );
            }}
          />
          <label htmlFor="company" className="text-orange-900">
            Company
          </label>
          <Controller
            name="affiliation"
            control={control}
            render={({ field }) => {
              return (
                <input
                  {...field}
                  type="radio"
                  id="company"
                  value="company"
                  className="accent-orange-600 hover:cursor-pointer"
                  {...register("affiliation", { required: true })}
                />
              );
            }}
          />
        </div>
        <p className="text-orange-900">
          By submiting your registration you agree on our{" "}
          <a
            href="#"
            className="text-orange-600 hover:text-orange-800 transition-all"
          >
            Privacy Policy
          </a>
        </p>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        Already have an Account?{" "}
        <Link href="/login" className={styles.routeLink}>
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

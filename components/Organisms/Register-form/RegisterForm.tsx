import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import styles from "./register-form.module.css";
import Select from "@/components/Atoms/Select/Select";

const RegisterForm = () => {
  const { t } = useTranslation("common");

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
        {errors?.gender ? (
          <p className="text-red-600">{t("choose-gender-error")}</p>
        ) : (
          <p className="text-orange-900">{t("choose-gender")}</p>
        )}
        <div className="flex gap-2">
          <label htmlFor="male" className="text-orange-600">
            {t("male")}
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
          <label htmlFor="female" className="text-orange-600">
            {t("female")}
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
        <div className="flex w-full gap-2 justify-between">
          <input
            className={
              errors?.firstName
                ? styles.inputError + " w-6/12"
                : styles.input + " w-6/12"
            }
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            placeholder={
              errors?.firstName ? t("name-error") : t("name-placeholder")
            }
          />
          <input
            className={
              errors?.firstName
                ? styles.inputError + " w-6/12"
                : styles.input + " w-6/12"
            }
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            placeholder={
              errors?.lastName ? t("lastname-error") : t("lastname-placeholder")
            }
          />
        </div>
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
              placeholder={
                errors?.email ? t("email-error") : t("no-email-error")
              }
              className={errors?.firstName ? styles.inputError : styles.input}
            />
          )}
        />
        {errors?.email && (
          <p className="text-red-600">
            {typeof errors.email === "string"
              ? errors.email
              : t("bad-email-error")}
          </p>
        )}
        <Select register={register} errors={errors} t={t} />
        <div className="flex flex-col items-cente my-10 mt-5">
          <input
            className={errors?.firstName ? styles.inputError : styles.input}
            type="text"
            id="username"
            {...register("username", { required: true })}
            placeholder={
              errors?.firstname
                ? t("username-placeholder")
                : t("username-required")
            }
          />
          <input
            className={errors?.firstName ? styles.inputError : styles.input}
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder={
              errors?.password
                ? t("password-required")
                : t("passwodrd-placeholder")
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
                ? t("missing-confirm-password")
                : t("confirm-password")
            }
          />
          {errors?.cpassword && (
            <p className="text-red-600">
              {typeof errors.cpassword === "string"
                ? errors.cpassword
                : t("passwords-match-error")}
            </p>
          )}
        </div>
        {errors?.affiliation ? (
          <p className="text-red-600">{t("select-affiliation-error")}</p>
        ) : (
          <p className="text-orange-900"> {t("select-affiliation")} </p>
        )}
        <div className="flex gap-2">
          <label htmlFor="private" className="text-orange-600">
            {t("private")}
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
          <label htmlFor="company" className="text-orange-600">
            {t("company")}
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
          {t("policy-agree-text")}{" "}
          <a
            href="#"
            className="text-orange-600 hover:text-orange-800 transition-all"
          >
            {t("privacy-policy")}
          </a>
        </p>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <p className="text-orange-900 text-sm">
        {t("have-account-text")}{" "}
        <Link href="/login" className={styles.routeLink}>
          {t("login-link")}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

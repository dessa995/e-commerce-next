import Link from "next/link";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { passwordMatch, formSubmit } from "@/utils/helpers";
import Select from "@/components/Atoms/Select/Select";

import { GenderData } from "@/services/genderData";
import GenderRadio from "@/components/Atoms/GenderRadio/GenderRadio";
import { AffiliationsData } from "@/services/affiliationsData";
import AffiliationsRadio from "@/components/Atoms/AffiliationsRadio/AffiliationsRadio";

import styles from "./register-form.module.css";
import Email from "@/components/Atoms/Email/Email";
import ErrorComponent from "@/components/Atoms/ErrorComponent/Error";

const RegisterForm = () => {
  const { t } = useTranslation("common");

  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center">
      <h2 className={styles.formHeading}>Registration</h2>
      <form
        className="flex flex-col gap-2 w-11/12"
        onSubmit={handleSubmit((data) =>
          formSubmit(data, { reset, getValues })
        )}
      >
        {errors?.gender ? (
          <ErrorComponent
            t={t}
            errors={errors?.gender}
            translate={"choose-gender-error"}
          />
        ) : (
          <p className="text-sky-950">{t("choose-gender")}</p>
        )}
        <div className="flex gap-2">
          <GenderRadio
            t={t}
            control={control}
            register={register}
            genderData={GenderData}
          />
        </div>
        <div className="flex w-full gap-2 justify-between">
          <div className="w-[48%]">
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
          </div>
          <div className="w-[48%]">
            <input
              className={
                errors?.lastName
                  ? styles.inputError + " w-6/12"
                  : styles.input + " w-6/12"
              }
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
              placeholder={
                errors?.lastName
                  ? t("lastname-error")
                  : t("lastname-placeholder")
              }
            />
          </div>
        </div>
        <div className="w-full">
          <Email t={t} register={register} errors={errors} control={control} />
          <ErrorComponent
            t={t}
            errors={errors?.email}
            translate="bad-email-error"
          />
        </div>
        <div className="w-full">
          <ErrorComponent
            t={t}
            errors={errors?.country}
            translate="select-header"
          />
          <Select register={register} errors={errors} t={t} />
        </div>
        <div className="flex flex-col gap-1 items-cente my-10 mt-5">
          <div className="w-full">
            <input
              className={errors?.username ? styles.inputError : styles.input}
              type="text"
              id="username"
              {...register("username", { required: true })}
              placeholder={
                errors?.firstname
                  ? t("username-placeholder")
                  : t("username-required")
              }
            />
          </div>
          <div className="w-full">
            <input
              className={errors?.password ? styles.inputError : styles.input}
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder={
                errors?.password
                  ? t("password-required")
                  : t("passwodrd-placeholder")
              }
            />
          </div>
          <div className="w-full">
            <input
              className={errors?.cpasword ? styles.inputError : styles.input}
              type="password"
              id="cPassword"
              {...register("cpassword", {
                required: true,
                validate: (value) => passwordMatch(value, getValues),
              })}
              placeholder={
                errors?.cpassword
                  ? t("missing-confirm-password")
                  : t("confirm-password")
              }
            />
          </div>
          <ErrorComponent
            t={t}
            errors={errors.cpassword}
            translate={"passwords-match-error"}
          />
        </div>
        {errors?.affiliation ? (
          <ErrorComponent
            t={t}
            errors={errors?.affiliation}
            translate={"select-affiliation-error"}
          />
        ) : (
          <p className="text-sky-950"> {t("select-affiliation")} </p>
        )}
        <div className="w-full">
          <AffiliationsRadio
            t={t}
            control={control}
            register={register}
            affiliationsData={AffiliationsData}
          />
        </div>
        <p className="text-slate-100">
          {t("policy-agree-text")}{" "}
          <a
            href="#"
            className="text-sky-950 hover:text-slate-100 transition-all"
          >
            {t("privacy-policy")}
          </a>
        </p>
        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </form>
      <p className="text-slate-100 text-sm">
        {t("have-account-text")}{" "}
        <Link href="/login" className={styles.routeLink}>
          {t("login-link")}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

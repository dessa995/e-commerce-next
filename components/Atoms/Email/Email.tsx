import { validateEmail } from "@/utils/helpers";
import React from "react";
import { useForm, Controller } from "react-hook-form";

import styles from "./email.module.css";

const Email = ({ t, errors, register, control }: any) => {
  // const { control } = useForm();

  return (
    <React.Fragment>
      <div className="w-full">
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required", validate: validateEmail }}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              {...register("email", { required: true })}
              type="text"
              id="email"
              placeholder={
                errors?.email ? t("no-email-error") : t("email-placeholder")
              }
              className={errors?.email ? styles.inputError : styles.input}
            />
          )}
        />
      </div>
    </React.Fragment>
  );
};

export default Email;

import React from "react";

import styles from "./select.module.css";

type selectProps = {
  register: any;
  errors: any;
  t: any;
};

const Select = ({ register, errors, t }: selectProps) => {
  return (
    <React.Fragment>
      <label
        htmlFor="select-country"
        className={
          errors?.country ? styles.selectLabelError : styles.selectLabel
        }
      >
        {errors?.country && t("select-header")}
      </label>
      <select
        className={styles.countrySelect}
        defaultValue=""
        id="select-country"
        {...register("country", { required: true })}
      >
        <option disabled value="">
          {`- ${t("select-header")} -`}
        </option>
        <option value="england">{t("england")}</option>
        <option value="spain">{t("spain")}</option>
        <option value="germany">{t("germany")}</option>
        <option value="italy">{t("italy")}</option>
      </select>
    </React.Fragment>
  );
};

export default Select;

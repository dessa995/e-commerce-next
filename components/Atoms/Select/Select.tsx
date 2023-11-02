import React from "react";

import styles from "./select.module.css";

type selectProps = {
  register: any;
  errors: any;
};

const Select = ({ register, errors }: selectProps) => {
  return (
    <React.Fragment>
      <label
        htmlFor="select-country"
        className={
          errors?.country ? styles.selectLabelError : styles.selectLabel
        }
      >
        {errors?.country && "Please select country"}
      </label>
      <select
        defaultValue=""
        id="select-country"
        {...register("country", { required: true })}
      >
        <option disabled value="">
          - Please select a Country -
        </option>
        <option value="england">{"England"}</option>
        <option value="spain">{"Spain"}</option>
        <option value="germany">{"Germany"}</option>
        <option value="italy">{"Italy"}</option>
      </select>
    </React.Fragment>
  );
};

export default Select;

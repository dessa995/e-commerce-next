import React from "react";
import { useForm, Controller } from "react-hook-form";

const GenderRadio = ({ t, control, register, genderData }: any) => {
  return (
    <div className="flex gap-2">
      {genderData?.map((gender: any) => (
        <React.Fragment key={gender.id}>
          <label htmlFor={gender.name} className="text-slate-100 capitalize">
            {t(`${gender.name}`)}
          </label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="accent-sky-600 hover:cursor-pointer"
                type="radio"
                id={gender.id}
                value={gender.value}
                {...register("gender", { required: true })}
              />
            )}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default GenderRadio;

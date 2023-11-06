import React from "react";
import { Controller } from "react-hook-form";

const AffiliationsRadio = ({ t, control, register, affiliationsData }: any) => {
  return (
    <div className="flex gap-2">
      {affiliationsData?.map((affiliation: any) => (
        <React.Fragment key={affiliation.id}>
          <label
            htmlFor={affiliation.name}
            className="text-orange-600 capitalize"
          >
            {t(`${affiliation.name}`)}
          </label>
          <Controller
            name="affiliation"
            control={control}
            render={({ field }) => {
              return (
                <input
                  {...field}
                  type="radio"
                  id={affiliation.id}
                  value={affiliation.value}
                  className="accent-orange-600 hover:cursor-pointer"
                  {...register("affiliation", { required: true })}
                />
              );
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default AffiliationsRadio;

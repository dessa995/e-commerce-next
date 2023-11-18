import React from "react";

const ErrorComponent = ({ errors, t, translate }: any) => {
  return (
    <React.Fragment>
      {errors && (
        <p className="text-red-700 font-bold">
          {typeof errors === "string" ? errors : t(translate)}
        </p>
      )}
    </React.Fragment>
  );
};

export default ErrorComponent;

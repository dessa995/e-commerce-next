import React from "react";

const ErrorComponent = ({ errors, t, translate }: any) => {
  return (
    <React.Fragment>
      {errors && (
        <p className="text-red-600">
          {typeof errors === "string" ? errors : t(translate)}
        </p>
      )}
    </React.Fragment>
  );
};

export default ErrorComponent;

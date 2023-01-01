import React from "react";

function Alert({ response }) {
  return (
    <div
      className={`alert ${
        response === "success" ? "alert-secondary" : "alert-danger"
      }`}
      role="alert"
    >
      <div>{response}</div>
    </div>
  );
}

export default Alert;

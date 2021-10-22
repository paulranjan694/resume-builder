import React from "react";
import "./FormInput.style.scss";

const FormInput = ({ title, type, value, name, handleChange }) => (
  <div className="formInput__container">
    <input
      type={type}
      name={name}
      onChange={handleChange}
      className="formInput__input"
      value={value}
    />
    {title ? (
      <label className={`formInput__title ${value && value.length ? "shrink" : ''}`}>
        {title}
      </label>
    ) : (
      null
    )}
  </div>
);

export default FormInput;

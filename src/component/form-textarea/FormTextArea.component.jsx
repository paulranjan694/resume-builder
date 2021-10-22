import React from "react";
import "./FormTextArea.style.scss";

function FormTextArea({ title, name, col, row, handleChange, value }) {
  return (
    <div className="formInput__container">
      <textarea
        name={name}
        cols={col}
        rows={row}
        onChange={handleChange}
        className='formTextArea'
        value={value}
      ></textarea>
      {title ? (
      <label className={`formInput__title ${value && value.length ? "shrink" : ""}`}>
        {title}
      </label>
    ) : (
      ""
    )}
    </div>
  );
}

export default FormTextArea;

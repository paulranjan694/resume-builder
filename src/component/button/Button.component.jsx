import React from "react";
import "./Button.style.scss";
function Button({ title, style, history, link, type }) {
  // const {} = history;
  return (
    <button
      type={type}
      className={`btn ${style}`}
      onClick={ (history && link) ? () => history.push(`${link}`) : null}
    >
      {title}
    </button>
  );
}

export default Button;

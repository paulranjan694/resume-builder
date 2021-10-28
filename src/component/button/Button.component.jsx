import React from "react";
import "./Button.style.scss";
function Button({ title, Style, history, link, type, clickHandler }) {
  // const {} = history;
  return (
    <button
      type={type}
      className={`btn ${Style}`}
      onClick={ (history && link) ? () => history.push(`${link}`) : clickHandler}
    >
      {title}
    </button>
  );
}

export default Button;

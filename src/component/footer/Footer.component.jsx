import React from "react";
import { Link } from "react-router-dom";
import "./Footer.style.scss";

function Footer() {
  return (
    <div className="footer__wrapper">
           <div className="wave__footer">
            <img src={process.env.PUBLIC_URL + "svg/wave-footer.svg"} alt="" />
        </div>
      <div className="footer__primary__section">
        <div className="footer__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/templates">Templates</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </div>
        <div className="footer__socials">
          <li>
            <i class="fab fa-facebook-square"></i>
          </li>
          <li>
            <i class="fab fa-google-plus-square"></i>
          </li>
          <li>
            <i class="fab fa-instagram-square"></i>
          </li>
          <li>
            <i class="fab fa-linkedin"></i>
          </li>
          <li>
            <i class="fab fa-twitter-square"></i>
          </li>
        </div>
      </div>
      <div className="footer__secondary__section">
          <p>Copyright © 2021. All rights reserved.</p>
      </div>

  
    </div>
  );
}

export default Footer;

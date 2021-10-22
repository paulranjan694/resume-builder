import React from "react";
import Button from "../button/Button.component";
import './HomePageTemplateSection.style.scss'

function HomePageTemplateSection({location,history}) {
    console.log(location.pathname);
  return (
    <div className="section__wrapper">
        <div className="wave">
            <img src={process.env.PUBLIC_URL+"svg/wave2.svg"} alt="" />
        </div>
        <div className="section__container">
        <h3 className="section__title">Templates</h3>
        <div className="templates__container">
            <div className="image__container">
            <img src="https://enhancv.com/static/e36c360d3622c5c5d8560be780d5499f/f4094/the-modern.webp.png" />
            </div>

            <div className="image__container">
            <img src="https://enhancv.com/static/e36c360d3622c5c5d8560be780d5499f/f4094/the-modern.webp.png" />
            </div>

            <div className="image__container">
            <img src="https://enhancv.com/static/e36c360d3622c5c5d8560be780d5499f/f4094/the-modern.webp.png" />
            </div>
        </div>
        <div className="button-container">
            <Button title="View More" style="regular" history={history} link="/templates"/>
        </div>
        </div>
    </div>
  );
}

export default HomePageTemplateSection;

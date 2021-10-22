import React from "react";
import "./HomePageHowItWorks.style.scss";

function HomePageHowItWorks() {
  return (
    <div className="section__wrapper">
      {/* <img src={process.env.PUBLIC_URL + "svg/AnimatedShape.svg"} alt="" /> */}
      <h3 className="section__title"> How it works</h3>
      <div className="howItWorks__container">
        <div className="row">
          <div className="column">
            <div className="col-icon">
              <img
                src={process.env.PUBLIC_URL + "img/how_it_works__1.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="column howItWorks__text">
              Select a template
          </div>
        </div>
        <div className="row">
          <div className="column howItWorks__text">
              Fill the details
          </div>
          <div className="column">
          <div className="col-icon resumeFill-icon">
              <img
                src={process.env.PUBLIC_URL + "img/how_it_works__2-removebg-preview.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
          <div className="col-icon download-icon">
              <img src="https://media.istockphoto.com/vectors/pdf-download-vector-icon-vector-id1263032734?b=1&k=20&m=1263032734&s=170667a&w=0&h=GOjtB7DDyaueK-MPLwbNNNFvVbklEqKjdF-A8mwbJeU=" alt="" />
          {/* <i class="fas fa-file-download"></i> */}
            </div>
          </div>
          <div className="column howItWorks__text">
              Download it
          </div>
        </div>
      </div>
      <div className="wave__line">
      <img src={process.env.PUBLIC_URL + "svg/WaveLine.svg"} alt="" />
      </div>
      
    </div>
  );
}

export default HomePageHowItWorks;

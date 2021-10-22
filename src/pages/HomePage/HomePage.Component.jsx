import React from "react";
import Banner from "../../component/banner/Banner.component";
import Contact from "../../component/contact-us/Contact.component";
import Footer from "../../component/footer/Footer.component";
import HomePageHowItWorks from "../../component/homapage-how_it_works/HomePageHowItWorks.component";
import HomePageTemplateSection from "../../component/homePage-TemplateSection/HomePageTemplateSection.component";
import "./HomePage.style.scss";

function HomePage(props) {
  console.log(props);
  return (
    <div className="homepage__container">
      <div className="heroic__banner sub-section">
        <Banner />
      </div>
      <div className="sample__templates sub-section">
        <HomePageTemplateSection {...props}/>
      </div>
      <div className="how__it__works sub-section">
        <HomePageHowItWorks/>
      </div>
      <div className="contact__us sub-section">
        <Contact/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;

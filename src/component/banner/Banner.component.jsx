import React from 'react'
import './Banner.style.scss'


function Banner() {
    return (
        <div className="banner__container">
            <div className="banner__primarySection">
                <div className="banner__left">
                    <p>
                        Build your resume now ...
                    </p>
                </div>
                <div className="banner__right">
                    <div className="banner__sideImage">
                        <img src={process.env.PUBLIC_URL+"img/header1.jpeg"} alt="" />
                    </div>
                </div>
            </div>
            <div className="banner__secondarySection">
                <img src={process.env.PUBLIC_URL+"svg/wave.svg"} alt="" />
                
            </div>
        </div>
    )
}

export default Banner

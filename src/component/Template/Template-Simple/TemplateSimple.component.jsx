import React from 'react'
import ResumePrimaryDetail from '../../resume-primaryDetail/ResumePrimaryDetail.component';

const TemplateSimple = ({
    contactDetails,
    educationDetails,
    experienceDetails,
    projectDetails,
    skills,
    hobbies,
    profileLinks,
    languages
}) => {
    const {name, email, bio, phone, jobTitle, street, state, country, pin} = contactDetails;
    const {linkedIn, github, website} = profileLinks;
    const primaryDetails = {
        name, 
        jobTitle,
        bio
    }
    return (
        <div className="templateSimple__wrapper">
            <div className="templateBasic__header__container">
                <div className="templateBasic__header">
                    <div className="header_image">
                        <img src="https://www.blexar.com/avatar.png" alt="" />
                    </div>
                    <p>Ranjan</p>
                    <ResumePrimaryDetail {...primaryDetails}/>
                </div>
                <div className="templateBasic__contacts">

                </div>
            </div>
            <div className="templateBasic__container">
                <div className="templateBasic__skills"></div>
                <div className="templateBasic__education"></div>
                <div className="templateBasic__workExp"></div>
                <div className="templateBasic__projects"></div>
                <div className="templateBasic__languages"></div>
                <div className="templateBasic__hobbies"></div>
            </div>
            
            
        </div>
    );
}


export default TemplateSimple;

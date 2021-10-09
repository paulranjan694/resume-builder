import React from "react";
import { Link } from "react-router-dom";
import ResumeEducationalDetail from "../../resume-educationalDetail/ResumeEducationalDetail.component";
import ResumeExperienceDetail from "../../resume-experienceDetail/ResumeExperienceDetail.component";
import ResumeHobby from "../../resume-hobby/ResumeHobby.component";
import ResumeLanguage from "../../resume-language/ResumeLanguage.component";
import ResumePrimaryDetail from "../../resume-primaryDetail/ResumePrimaryDetail.component";
import ResumeProjectDetail from "../../resume-projectDetail/ResumeProjectDetail.component";
import ResumeSkill from "../../resume-skill/ResumeSkill.component";
import ResumeTitle from "../../resume-title/ResumeTitle.component";

import './TemplateBasic.style.scss'

const TemplateBasic = ({
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
        bio,
        color : "whitesmoke"
    }

    // const contactDetails = {
    //     email,
    //     phone,
    //     street,
    //     city,
    //     country,
    //     pin,
    //     linkedIn,
    //     github
    // }
    // console.log(linkedIn, name);
    // language.map(ele => console.log(ele));
  return (
    <div className="templateBasic__wrapper">
        <div className="templateBasic__header">
            <div className="header__image">
                <img src="https://www.blexar.com/avatar.png" alt="" />
            </div>
            <div className="header__primaryDetails">
                <ResumePrimaryDetail {...primaryDetails} />
            </div>
        </div>
        <div className="templateBasic__contacts">
            <div className="contacts_value__container">
                <div className="contacts__value">
                    <i class="fas fa-envelope contact__icon"></i>
                    <span>{email}</span>
                </div>
                <div className="contacts__value">
                    <i class="fas fa-mobile-alt contact__icon"></i>
                    <span>{phone}</span>
                </div>
            </div>
            <div className="contacts_value__container">
                <div className="contacts__value">
                    <i class="fas fa-map-marker-alt contact__icon"></i>
                    <span>{street}, {state}, {country}, ({pin})</span>
                </div>
                <div className="contacts__value">
                    <i class="fab fa-linkedin-in contact__icon"></i>
                    <Link to={linkedIn}>{linkedIn}</Link>
                </div>
            </div>
            <div className="contacts_value__container">
                <div className="contacts__value">
                    <i class="fab fa-github contact__icon"></i>
                    <Link to={github}>{github}</Link>
                </div>
                <div className="contacts__value">
                    <i class="fas fa-globe contact__icon"></i>
                    <Link to={website}>{website}</Link>
                </div>
            </div>
        </div>
        <div className="templateBasic__container">
            <div className="templateBasic__contaner__left">
                <div className="templateBasic__education mb-15px">
                    <div className="section__title__header">
                        <i class="fas fa-university"></i>
                        <ResumeTitle title='Education'/>
                    </div>
                    <div className='ml-10px'>
                        {
                            educationDetails.map((educationDetail, idx) => (
                                <ResumeEducationalDetail key={idx} {...educationDetail} />
                            ))
                        }
                    </div>
                </div>
                <div className="templateBasic__workExp mb-15px">
                    <div className="section__title__header">
                        <i class="fas fa-briefcase"></i>
                        <ResumeTitle title="work experience" />
                    </div>
                    <div className='ml-10px'>
                        {
                            experienceDetails.map((experienceDetail, idx) => (
                                <ResumeExperienceDetail key={idx} 
                                {...experienceDetail} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="templateBasic__contaner__right">
                <div className="templateBasic__skills">
                    <div className="section__title__header">
                        <i class="fas fa-graduation-cap"></i>
                        <ResumeTitle title='skills'/>
                    </div>
                    <div className="skills__container mb-15px ml-10px">
                        {
                            skills.map((skill, idx) => (
                                <ResumeSkill key={idx} 
                                skill={skill}/>
                            ))
                        }
                    </div>
                </div>
                <div className="templateBasic__projects">
                    <div className="section__title__header">
                        <i class="fas fa-file-code"></i>
                        <ResumeTitle title='personal projects'/>
                    </div>
                    <div className='project__container mb-15px ml-10px'>
                        {
                            projectDetails.map((project, idx) => (
                                <ResumeProjectDetail key={idx} {...project}/>
                            ))
                        }
                    </div>
                </div>
                <div className="templateBasic__languages">
                    <div className="section__title__header">
                        <i class="fas fa-language"></i>
                        <ResumeTitle title='Languages' />
                    </div>
                    <div className="language__container mb-15px ml-10px">
                        {
                            languages.map((language, idx) => (
                                <ResumeLanguage key={idx} language={language} />
                            ))
                        }
                    </div>
                </div>
                <div className="templateBasic__hobbies">
                    <div className="section__title__header">
                        <i class="fas fa-heartbeat"></i>
                        <ResumeTitle title='intersets'/>
                    </div>
                    <div className="hobbies__container mb-15px ml-10px">
                        {
                            hobbies.map((hobby, idx) => (
                            <ResumeHobby key={idx} hobby={hobby}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TemplateBasic;

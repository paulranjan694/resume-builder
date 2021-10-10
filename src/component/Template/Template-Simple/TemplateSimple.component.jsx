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
import ProfileLogo from './avatar.png'

import "./TemplateSimple.style.scss";

const TemplateSimple = ({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skills,
  hobbies,
  profileLinks,
  languages,
}) => {
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [4, 2],
  };

  const { name, email, bio, phone, jobTitle, street, state, country, pin } =
    contactDetails;
  const { linkedIn, github, website } = profileLinks;
  const primaryDetails = {
    name,
    jobTitle,
    bio,
  };

  const skillStyles = {
    background: "none",
    border: "1px solid",
    color: "black",
  };

  return (
     
    <div className="templateSimple__wrapper">

      <div className="templateSimple__header__container">
        <div className="templateSimple__header">
          <div className="header_image">
            <img src={ProfileLogo} alt="" />
          </div>
          <div className="header__primaryDetails">
            <ResumePrimaryDetail {...primaryDetails} />
          </div>
        </div>
        <div className="templateSimple__contacts">
          <div className="contacts__value">
            <span>{email}</span>
            <i class="fas fa-envelope contact__icon"></i>
          </div>
          <div className="contacts__value">
            <span>{phone}</span>
            <i class="fas fa-mobile-alt contact__icon"></i>
          </div>

          <div className="contacts__value">
            <span>
              {state}, {country}
            </span>
            <i class="fas fa-map-marker-alt contact__icon"></i>
          </div>
          <div className="contacts__value">
            <Link to={linkedIn}>{linkedIn}</Link>
            <i class="fab fa-linkedin-in contact__icon"></i>
          </div>

          <div className="contacts__value">
            <Link to={github}>{github}</Link>
            <i class="fab fa-github contact__icon"></i>
          </div>
          <div className="contacts__value">
            <Link to={website}>{website}</Link>
            <i class="fas fa-globe contact__icon"></i>
          </div>
        </div>
      </div>

      <div className="templateSimple__container">
        <div className="templateSimple__skills pAll-20px-15 bb-1px-solid-black">
          <div className="section__title__header">
            <i class="fas fa-graduation-cap"></i>
            <ResumeTitle title="skills" />
          </div>
          <div className="skills__container mb-15px ml-20px">
            {skills.map((skill, idx) => (
              <ResumeSkill key={idx} skill={skill} styles={skillStyles} />
            ))}
          </div>
        </div>
        <div className="templateSimple__education pAll-20px-15 bb-1px-solid-black">
          <div className="section__title__header">
            <i class="fas fa-university"></i>
            <ResumeTitle title="Education" />
          </div>
          <div className="ml-20px">
            {educationDetails.map((educationDetail, idx) => (
              <ResumeEducationalDetail
                key={idx}
                {...educationDetail}
                width="50%"
              />
            ))}
          </div>
        </div>
        <div className="templateSimple__workExp pAll-20px-15 bb-1px-solid-black">
          <div className="section__title__header">
            <i class="fas fa-briefcase"></i>
            <ResumeTitle title="work experience" />
          </div>
          <div className="ml-20px">
            {experienceDetails.map((experienceDetail, idx) => (
              <ResumeExperienceDetail key={idx} {...experienceDetail} />
            ))}
          </div>
        </div>
        <div className="templateSimple__projects pAll-20px-15 bb-1px-solid-black">
          <div className="section__title__header">
            <i class="fas fa-file-code"></i>
            <ResumeTitle title="personal projects" />
          </div>
          <div className="project__container mb-15px ml-20px">
            {projectDetails.map((project, idx) => (
              <ResumeProjectDetail key={idx} {...project} />
            ))}
          </div>
        </div>
        <div className="templateSimple__languages pAll-20px-15 bb-1px-solid-black">
          <div className="section__title__header">
            <i class="fas fa-language"></i>
            <ResumeTitle title="Languages" />
          </div>
          <div className="language__container mb-15px ml-20px">
            {languages.map((language, idx) => (
              <ResumeLanguage key={idx} language={language} mr="15px" />
            ))}
          </div>
        </div>
        <div className="templateSimple__hobbies pAll-20px-15">
          <div className="section__title__header">
            <i class="fas fa-heartbeat"></i>
            <ResumeTitle title="intersets" />
          </div>
          <div className="hobbies__container mb-15px ml-20px">
            {hobbies.map((hobby, idx) => (
              <ResumeHobby key={idx} hobby={hobby} mr="15px" />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default TemplateSimple;

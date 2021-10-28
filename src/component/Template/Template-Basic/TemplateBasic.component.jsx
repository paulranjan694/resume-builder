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
import ReactToPdf from "react-to-pdf";

import "./TemplateBasic.style.scss";
import EditorSidebar from "../../editor-sidebar/EditorSidebar.component";
import Button from "../../button/Button.component";


const TemplateBasic = ({
  contactDetails,
  educationDetails,
  experienceDetails,
  projectDetails,
  skills,
  hobbies,
  profileLinks,
  languages,
}) => {
    const ref = React.createRef();
  const { fullname, email, bio, phone, jobTitle, street, state, country, pin } =
    contactDetails;
  const { linkedIn, github, website } = profileLinks;
  const primaryDetails = {
    fullname,
    jobTitle,
    bio,
    color: "whitesmoke",
  };

  const skillStyles = {
    background: '#5cbcb3',
    color: 'white',
    border: "none"
  }

  console.log(contactDetails);
  

  return (
      <div>
<Button title="Save to DB" Style="regular"/>
<ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
          <EditorSidebar/>
      <div className="templateBasic__wrapper"  ref={ref}>
        <div className="templateBasic__header">
          <div className="header__image">
            <img src='data:image/png;base64,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' alt="" />
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
              <span>
                {street}, {state}, {country}, ({pin})
              </span>
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
                <ResumeTitle title="Education" />
              </div>
              <div className="ml-10px">
                {educationDetails.map((educationDetail, idx) => (
                  <ResumeEducationalDetail key={idx} {...educationDetail} />
                ))}
              </div>
            </div>
            <div className="templateBasic__workExp mb-15px">
              <div className="section__title__header">
                <i class="fas fa-briefcase"></i>
                <ResumeTitle title="work experience" />
              </div>
              <div className="ml-10px">
                {experienceDetails.map((experienceDetail, idx) => (
                  <ResumeExperienceDetail key={idx} {...experienceDetail} />
                ))}
              </div>
            </div>
          </div>
          <div className="templateBasic__contaner__right">
            <div className="templateBasic__skills">
              <div className="section__title__header">
                <i class="fas fa-graduation-cap"></i>
                <ResumeTitle title="skills" />
              </div>
              <div className="skills__container mb-15px ml-10px">
                {skills.map((skill, idx) => (
                  <ResumeSkill key={idx} skill={skill} styles={skillStyles} />
                ))}
              </div>
            </div>
            <div className="templateBasic__projects">
              <div className="section__title__header">
                <i class="fas fa-file-code"></i>
                <ResumeTitle title="personal projects" />
              </div>
              <div className="project__container mb-15px ml-10px">
                {projectDetails.map((project, idx) => (
                  <ResumeProjectDetail key={idx} {...project} />
                ))}
              </div>
            </div>
            <div className="templateBasic__languages">
              <div className="section__title__header">
                <i class="fas fa-language"></i>
                <ResumeTitle title="Languages" />
              </div>
              <div className="language__container mb-15px ml-10px">
                {languages.map((language, idx) => (
                  <ResumeLanguage key={idx} language={language} />
                ))}
              </div>
            </div>
            <div className="templateBasic__hobbies">
              <div className="section__title__header">
                <i class="fas fa-heartbeat"></i>
                <ResumeTitle title="intersets" />
              </div>
              <div className="hobbies__container mb-15px ml-10px">
                {hobbies.map((hobby, idx) => (
                  <ResumeHobby key={idx} hobby={hobby} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default TemplateBasic;

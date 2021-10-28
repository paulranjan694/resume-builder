import React, { useState } from "react";
import "./EditorSidebar.style.scss";
import ReactTooltip from "react-tooltip";
import Modal from "../modal/Modal.component";
import Backdrop from "../backdrop/Backdrop.component";
import EditorSocialLinks from "../editor/social-links/EditorSocialLinks.component";
import EditorLanguages from "../editor/languages/EditorLanguages.component";
import EditorHobbies from "../editor/hobbies/EditorHobbies.component";
import EditorSkills from "../editor/skills/EditorSkills.component";
import EditorProjects from "../editor/projects/EditorProjects.component";
import EditorExperience from "../editor/experience/EditorExperience.component";
import EditorEducation from "../editor/education/EditorEducation.component";

function EditorSidebar() {
  const [isOpen, setisOpen] = useState(false);
  const [option, setoption] = useState("");

  const modalOpenHandler = (event) => {
    const opt = event.target.dataset.val;
    setoption(opt);
    setisOpen(true);
  };

  const closeHandler = () => {
    const response = window.confirm("Are you sure you want to close?");
    if (response) {
      setisOpen(false);
    }
  };

  const modalContent = () => {
    if (option === "Social Links") {
      return <EditorSocialLinks clickHandler={closeHandler} />;
    }else if (option === "Educations") {
        return <EditorEducation clickHandler={closeHandler} />;
      }else if (option === "Experience") {
        return <EditorExperience clickHandler={closeHandler} />;
      } else if (option === "Skills") {
      return <EditorSkills clickHandler={closeHandler} />;
    } else if (option === "Projects") {
        return <EditorProjects clickHandler={closeHandler} />;
      } else if (option === "Languages") {
      return <EditorLanguages clickHandler={closeHandler} />;
    } else if (option === "Interests") {
      return <EditorHobbies clickHandler={closeHandler} />;
    } else {
      return "Coming Soon!!!";
    }
  };

  return (
    <>
      <Backdrop show={isOpen} closeHandler={closeHandler} />
      <Modal isOpen={isOpen}>{modalContent()}</Modal>
      <div className="editor__sidebar__container">
        <div className="editor__icon" data-tip="Info">
          <i
            onClick={modalOpenHandler}
            data-val="Info"
            class="fas fa-user-alt"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Social Links">
          <i
            class="fas fa-users"
            onClick={modalOpenHandler}
            data-val="Social Links"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Educations">
          <i
            class="fas fa-university"
            onClick={modalOpenHandler}
            data-val="Educations"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Work Experience">
          <i
            class="fas fa-briefcase"
            onClick={modalOpenHandler}
            data-val="Experience"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Skills">
          <i
            class="fas fa-graduation-cap"
            onClick={modalOpenHandler}
            data-val="Skills"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Projects">
          <i
            class="fas fa-laptop-code"
            onClick={modalOpenHandler}
            data-val="Projects"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Languages">
          <i
            class="fas fa-language"
            onClick={modalOpenHandler}
            data-val="Languages"
          ></i>
        </div>
        <div className="editor__icon" data-tip="Interests">
          <i
            class="fas fa-grin-hearts"
            onClick={modalOpenHandler}
            data-val="Interests"
          ></i>
        </div>
        <ReactTooltip place="left" type="dark" effect="solid" />
      </div>
    </>
  );
}

export default EditorSidebar;

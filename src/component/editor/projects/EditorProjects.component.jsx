import React, { useState } from "react";
import Button from "../../button/Button.component";
import FormInput from "../../form-input/FormInput.component";
import FormTextArea from "../../form-textarea/FormTextArea.component";
import "./EditorProjects.style.scss";

function EditorProjects({ clickHandler }) {

    const [inputFields, setInputFields] = useState([
        {
            projectName:'',
            summary: '',
            projectLink: '',
            techStack: ''
        }
    ])

    const changeHandler = (event, index) => {
        const {name, value} = event.target;
        const values = [...inputFields];
        // if(name=== 'techStack'){
        //     console.log('techStack');
        // }
        values[index][name] = value;
        setInputFields(values);
    }

    const addInputFieldHandler = () => {
        if(inputFields.length >= 3)
            return;
       setInputFields([...inputFields,  {skill : ''}]);
    }

    const removeInputFieldHandler = (index) => {
        if(inputFields.length <= 1)
            return;
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputFields);
    }

  return (
    <div className="EditorProjects__container">
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Projects</legend>
          {
              inputFields.map((inputField, index)=>(
                <div className="EditorProjects__form-group" key={index}>
                <div className="EditorProjects__form-input">
                  <FormInput title="Title" type="text" name="projectName" value={inputField.projectName} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorProjects__form-input">
                  <FormTextArea title="Summary" name="summary" value={inputField.summary} handleChange={event => changeHandler(event, index)} row="1" col="25"/>
                </div>
                <div className="EditorProjects__form-input">
                  <FormInput title="Tech Used" type="text" name="techStack" value={inputField.techStack} handleChange={event => changeHandler(event, index)}/>
                  <span style={{color:"#00000075", fontSize:"15px", fontWeight:"600"}}>eg.,HTML,CSS,JS <i style={{fontSize:"13px"}}>(comma seperated)</i></span>
                </div>
                <div className="EditorProjects__form-input">
                  <FormInput title="Live Link" type="text" name="projectLink" value={inputField.projectLink} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorProjects__form-input">
                  <div
                    className={`editor-skill-plus-icon ${inputFields.length >=6 ? 'inactive' : ''}`}
                    onClick={addInputFieldHandler}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="EditorProjects__form-input">
                  <div
                    className={`editor-skill-plus-icon ${inputFields.length <= 1 ? 'inactive' : ''}`}
                    onClick={()=>removeInputFieldHandler(index)}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                </div>
              </div>
              ))
          }
        { inputFields.length >= 3 && <p className="warning-info" style={{color:'red'}}>You can enter max 3 projects</p>}
          <div className="EditorProjects__form-group">
            <Button title="Save" Style="regular" type="submit"/>
            <Button
              title="Cancel"
              Style="solid"
              type="button"
              clickHandler={clickHandler}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default EditorProjects;

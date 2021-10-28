import React, { useState } from "react";
import Button from "../../button/Button.component";
import FormInput from "../../form-input/FormInput.component";
import "./EditorEducation.style.scss";

function EditorEducation({ clickHandler }) {

    const [inputFields, setInputFields] = useState([
        {
            collegeName: "",
            degree: "",
            cgpa: "",
            collegeCity: "",
            graduationMonth: "",
            graduationYear: ""
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
       setInputFields([...inputFields,  {
        collegeName: "",
        degree: "",
        cgpa: "",
        collegeCity: "",
        graduationMonth: "",
        graduationYear: ""
    }]);
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
    <div className="EditorEducation__container">
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Education</legend>
          {
              inputFields.map((inputField, index)=>(
                <div className="EditorEducation__form-group" key={index}>
                <div className="EditorEducation__form-input">
                  <FormInput title="Degree" type="text" name="degree" value={inputField.degree} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorEducation__form-input">
                  <FormInput title="College" type="text" name="collegeName" value={inputField.collegeName} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorEducation__form-input">
                  <FormInput title="College Location" type="text" name="collegeCity" value={inputField.collegeCity} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorEducation__form-input">
                  <FormInput title="Grad Month" type="text" name="graduationMonth" value={inputField.graduationMonth} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorEducation__form-input">
                  <FormInput title="Grad Year" type="text" name="graduationYear" value={inputField.graduationMonth} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorEducation__form-input">
                  <FormInput title="CGPA / %" type="text" name="cgpa" value={inputField.cgpa} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorEducation__form-input">
                  <div
                    className={`editor-skill-plus-icon ${inputFields.length >=3 ? 'inactive' : ''}`}
                    onClick={addInputFieldHandler}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="EditorEducation__form-input">
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
          <div className="EditorEducation__form-group">
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

export default EditorEducation;

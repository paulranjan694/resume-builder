import React, { useState } from "react";
import Button from "../../button/Button.component";
import FormInput from "../../form-input/FormInput.component";
import FormTextArea from "../../form-textarea/FormTextArea.component";
import "./EditorExperience.style.scss";

function EditorExperience({ clickHandler }) {

    const [inputFields, setInputFields] = useState([
        {
            companyName:'',
            duration: '',
            position: '',
            description: ''
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
        companyName:'',
        duration: '',
        position: '',
        description: ''
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
    <div className="EditorExperience__container">
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Work Experience</legend>
          {
              inputFields.map((inputField, index)=>(
                <div className="EditorExperience__form-group" key={index}>
                <div className="EditorExperience__form-input">
                  <FormInput title="Designation" type="text" name="position" value={inputField.position} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorExperience__form-input">
                  <FormInput title="Company" type="text" name="companyName" value={inputField.companyName} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorExperience__form-input">
                  <FormInput title="Duration" type="text" name="duration" value={inputField.duration} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorExperience__form-input">
                  <FormTextArea title="Description" row="1" col="30" name="description" value={inputField.description} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorExperience__form-input">
                  <div
                    className={`editor-skill-plus-icon ${inputFields.length >=6 ? 'inactive' : ''}`}
                    onClick={addInputFieldHandler}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="EditorExperience__form-input">
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
          <div className="EditorExperience__form-group">
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

export default EditorExperience;

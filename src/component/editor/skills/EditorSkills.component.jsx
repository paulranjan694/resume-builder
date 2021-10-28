import React, { useState } from "react";
import Button from "../../button/Button.component";
import FormInput from "../../form-input/FormInput.component";
import "./EditorSkills.style.scss";

function EditorSkills({ clickHandler }) {

    const [inputFields, setInputFields] = useState([
        {skill : ''}
    ])

    const changeHandler = (event, index) => {
        const {name, value} = event.target;
        const values = [...inputFields];
        values[index][name] = value;
        setInputFields(values);
    }

    const addInputFieldHandler = () => {
        if(inputFields.length >= 6)
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
    <div className="EditorSkills__container">
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Skills</legend>
          {
              inputFields.map((inputField, index)=>(
                <div className="EditorSkills__form-group" key={index}>
                <div className="EditorSkills__form-input">
                  <FormInput title="Skill" type="text" name="skill" value={inputField.skill} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorSkills__form-input">
                  <div
                    className={`editor-skill-plus-icon ${inputFields.length >=6 ? 'inactive' : ''}`}
                    onClick={addInputFieldHandler}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="EditorSkills__form-input">
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
        { inputFields.length >= 6 && <p className="warning-info" style={{color:'red'}}>You can enter max 6 interests</p>}
          <div className="EditorSkills__form-group">
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

export default EditorSkills;

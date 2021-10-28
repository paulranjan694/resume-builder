import React, { useState } from "react";
import Button from "../../button/Button.component";
import FormInput from "../../form-input/FormInput.component";
import "./EditorHobbies.style.scss";

function EditorHobbies({ clickHandler }) {

    const [inputFields, setInputFields] = useState([
        {hobby : ''}
    ])

    const changeHandler = (event, index) => {
        const {name, value} = event.target;
        const values = [...inputFields];
        values[index][name] = value;
        setInputFields(values);
    }

    const addInputFieldHandler = () => {
        if(inputFields.length >= 4)
            return;
       setInputFields([...inputFields,  {hobby : ''}]);
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
    <div className="EditorHobbies__container">
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Interests</legend>
          {
              inputFields.map((inputField, index)=>(
                <div className="EditorHobbies__form-group" key={index}>
                <div className="EditorHobbies__form-input">
                  <FormInput title="Interest" type="text" name="hobby" value={inputField.hobby} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorHobbies__form-input">
                  <div
                    className={`editor-hobby-plus-icon ${inputFields.length >=4 ? 'inactive' : ''}`}
                    onClick={addInputFieldHandler}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="EditorHobbies__form-input">
                  <div
                    className={`editor-hobby-plus-icon ${inputFields.length <= 1 ? 'inactive' : ''}`}
                    onClick={()=>removeInputFieldHandler(index)}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                </div>
              </div>
              ))
          }
        { inputFields.length >= 4 && <p className="warning-info" style={{color:'red'}}>You can enter max 4 interests</p>}
          <div className="EditorHobbies__form-group">
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

export default EditorHobbies;

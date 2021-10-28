import React, { useState } from "react";
import Button from "../../button/Button.component";
import FormInput from "../../form-input/FormInput.component";
import "./EditorLanguages.style.scss";

function EditorLanguages({ clickHandler }) {

    const [inputFields, setInputFields] = useState([
        {language : ''}
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
       setInputFields([...inputFields,  {language : ''}]);
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
    <div className="EditorLanguages__container">
      <form method="post" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Languages</legend>
          {
              inputFields.map((inputField, index)=>(
                <div className="EditorLanguages__form-group" key={index}>
                <div className="EditorLanguages__form-input">
                  <FormInput title="Language" type="text" name="language" value={inputField.language} handleChange={event => changeHandler(event, index)}/>
                </div>
                <div className="EditorLanguages__form-input">
                  <div
                    className={`editor-language-plus-icon ${inputFields.length >=4 ? 'inactive' : ''}`}
                    onClick={addInputFieldHandler}
                  >
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <div className="EditorLanguages__form-input">
                  <div
                    className={`editor-language-plus-icon ${inputFields.length <= 1 ? 'inactive' : ''}`}
                    onClick={()=>removeInputFieldHandler(index)}
                  >
                    <i class="fas fa-minus"></i>
                  </div>
                </div>
              </div>
              ))
          }
        { inputFields.length >= 4 && <p className="warning-info" style={{color:'red'}}>You can enter max 4 languages</p>}
          <div className="EditorLanguages__form-group">
            <Button title="Save" style="regular" type="submit"/>
            <Button
              title="Cancel"
              style="solid"
              type="button"
              clickHandler={clickHandler}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default EditorLanguages;

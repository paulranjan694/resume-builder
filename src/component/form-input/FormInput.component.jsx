import React from 'react'

const FormInput = ({title, type, name, handleChange}) => (
    <div className="formInput__container">
        <label className="formInput__title">{title}</label>
        <input type={type} name={name} onChange={handleChange} className='formInput__input'/>
    </div>
)

export default FormInput;
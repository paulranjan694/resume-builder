import React, { useState } from 'react'
import Button from '../../button/Button.component'
import FormInput from '../../form-input/FormInput.component'
import './EditorSocialLinks.style.scss'

function EditorSocialLinks({clickHandler}) {
    // const [state, setstate] = useState({
    //     email:
    // });

    // const handleChange = (e) => {
    //     const {name, value} = e.target;

    // }

    return (
        <div className="EditorSocialLinks__container">
            <form method="post">
                <fieldset>
                    <legend>Social Links</legend>
                <div className="EditorSocialLinks__form-group">
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Email" type="email" name="email" />
                    </div>
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Phone" type="text" name="phone" />
                    </div>
                </div>
                <div className="EditorSocialLinks__form-group">
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Street" type="text" name="street" />
                    </div>
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="State" type="text" name="state" />
                    </div>
                </div>
                <div className="EditorSocialLinks__form-group">
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Country" type="text" name="country" />
                    </div>
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="PIN Code" type="text" name="pin" />
                    </div>
                </div>
                <div className="EditorSocialLinks__form-group">
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Linked URL" type="text" name="linkedIn" />
                    </div>
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Github URL" type="text" name="github" />
                    </div>
                </div>
                <div className="EditorSocialLinks__form-group">
                    <div className="EditorSocialLinks__form-input">
                        <FormInput title="Website URL" type="text" name="website" />
                    </div>
                    <div className="EditorSocialLinks__form-input">
                    </div>
                </div>
                <div className="EditorSocialLinks__form-group">
                    <Button title="Save" style="regular" type="submit"/>
                    <Button title="Cancel" style="solid" type="button" clickHandler={clickHandler}/>
                </div>
                </fieldset>
            </form>
        </div>
    )
}

export default EditorSocialLinks

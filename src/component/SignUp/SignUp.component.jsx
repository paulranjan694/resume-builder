import React, { Component } from 'react'
import { auth, createUserDocument } from '../../firebase/config';
import { updateProfile } from "firebase/auth";
import './SignUp.style.scss'
import FormInput from '../form-input/FormInput.component';
import Button from '../button/Button.component';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    handleChange = (event) => {
        const{name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirm_password} = this.state;
        console.log(displayName, email, password, confirm_password);
        if(password !== confirm_password){
            alert("Password Mismatch, Please try again!!");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);

            await updateProfile(auth.currentUser,{
                displayName
            });

            await createUserDocument(user);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirm_password: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return (
            <div className='SignUp__container'>
                <form onSubmit={this.handleSubmit} method='post'>
                    <FormInput title="Name" type="text" value={this.state.displayName} name="displayName" handleChange={this.handleChange} />

                    <FormInput title="Email Id" type="email" value={this.state.email} name="email" handleChange={this.handleChange} />

                    <FormInput title="Password" type="password" value={this.state.password} name="password" handleChange={this.handleChange} />

                    <FormInput title="Confirm Password" type="password" value={this.state.confirm_password} name="confirm_password" handleChange={this.handleChange} />

                    <Button title="Sign Up" type="submit" style="regular" />

                </form>
            </div>
        )
    }
}

export default SignUp;

import React, { Component } from 'react'
import { auth, createUserDocument } from '../../firebase/config';
import { updateProfile } from "firebase/auth";

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
        // console.log(this.state);
        return (
            <div className='SignUp__container'>
                <form onSubmit={this.handleSubmit} method='post'>
                    <div className="SignUp__field">
                        <label>Name</label>
                        <input type="text" name="displayName" onChange={this.handleChange} />
                    </div>

                    {/* <FormInput title='Name' type="text" name='name'/> */}

                    <div className="SignUp__field">
                        <label>Email Id</label>
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </div>

                    <div className="SignUp__field">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </div>

                    <div className="SignUp__field">
                        <label>Confirm Password</label>
                        <input type="password" name="confirm_password" onChange={this.handleChange}/>
                    </div>

                    <button type="submit" className="SignUp__submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;

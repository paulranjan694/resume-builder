import React, { Component } from "react";
import { auth } from "../../firebase/config";
import Button from "../button/Button.component";
import FormInput from "../form-input/FormInput.component";

import './SignIn.style.scss';

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="signIn__container">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            title="Email"
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
          />

            <FormInput
            title="Password"
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            />
            <div className="button-group">
              <Button title="Sign In" type="submit" Style="regular" />
              <Button title="Sign In with Google" type="submit" Style="regular" />
            </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

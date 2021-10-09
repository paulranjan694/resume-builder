import React, { Component } from "react";
import { auth } from "../../firebase/config";
import FormInput from "../form-input/FormInput.component";

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
          />

            <FormInput
            title="Password"
            type="password"
            name="password"
            handleChange={this.handleChange}
            />
          <button type="submit" className="signIn__submit">
            Sign In
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="signIn__submit">Sign In with Google</button>
        </form>
      </div>
    );
  }
}

export default SignIn;

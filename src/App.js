import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "./component/Navbar/Navbar.component";
import { auth, firestore } from "./firebase/config";
import HomePage from "./pages/HomePage/HomePage.Component";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp.component";
import Templates from "./pages/Templates/Templates.component";

class App extends Component {
  state = {
    currentUser: null,
  };
  componentDidMount() {
    firestore
      .collection("resumes")
      .get()
      .then((docs) =>
        docs.forEach((doc) => {
          console.log(doc.id);
          console.log(doc.data());
        })
      );

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("authuser - ", authUser);
        this.setState({ currentUser: authUser });
      }else{
        this.setState({ currentUser: null });
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/templates" component={Templates} />
          <Route exact path="/about" component={HomePage} />
          <Route
            exact
            path="/sign-up"
            render={(props) =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp {...props} />
              )
            }
          />
          <Route
            exact
            path="/sign-in"
            render={(props) =>
              this.state.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp {...props} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

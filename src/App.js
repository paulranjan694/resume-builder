import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar/Navbar.component";
import { auth, firestore } from "./firebase/config";
import HomePage from "./pages/HomePage/HomePage.Component";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp.component";
import Templates from "./pages/Templates/Templates.component";
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { currentUser, setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from 'reselect';
import PrivateRoute from './routes/PrivateRoute';


class App extends Component {
  // state = {
  //   currentUser: null,
  // };
  componentDidMount() {
  const {setCurrentUser} = this.props;

    // firestore
    //   .collection("resumes")
    //   .get()
    //   .then((docs) =>
    //     docs.forEach((doc) => {
    //       console.log(doc.id);
    //       console.log(doc.data());
    //     })
    //   );

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("authuser - ", authUser);
        setCurrentUser(authUser);
      }else{
        setCurrentUser(null);
      }
    });
  }
  render() {
    return (
      <div>
        <Navbar currentUser = {this.props.currentUser} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/templates" component={Templates} />
          <Route exact path="/about" component={HomePage} />
          <Route
            exact
            path="/sign-up"
            render={(props) =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp {...props} />
              )
            }
          />
          {/* <PrivateRoute exact
            path="/sign-up" component={SignInAndSignUp}/> */}
          <Route
            exact
           path="/sign-in"
            render={(props) =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp {...props} />
              )
            }
          />
          {/* <PrivateRoute exact path="/sign-in" component={SignInAndSignUp} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser:  selectCurrentUser(state),
})

// ***using reselct -> createStructuredSelector syntax ********************
// const mapStateToProps = createStructuredSelector({
//   currentUser:  selectCurrentUser,
// })
// ************************

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

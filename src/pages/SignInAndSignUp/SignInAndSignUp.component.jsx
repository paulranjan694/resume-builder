import React from 'react'
import { withRouter } from 'react-router';
import SignIn from '../../component/SignIn/SignIn.component';
import SignUp from '../../component/SignUp/SignUp.component';
import './SIgnInAndSignUp.style.scss';

function SignInAndSignUp({match}){
    const {path} = match;
    console.log(path);
    console.log(path === '/sign-in');
    return (
      <div>
           {path === '/sign-in' ? <SignIn /> : <SignUp/>}
      </div>
       
    )
}

export default withRouter(SignInAndSignUp);

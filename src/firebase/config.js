import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBrOeUefv9r9-xj8EkitQwF8mTlx3tCISI",
  authDomain: "resume-builder-66902.firebaseapp.com",
  projectId: "resume-builder-66902",
  storageBucket: "resume-builder-66902.appspot.com",
  messagingSenderId: "805408074710",
  appId: "1:805408074710:web:c6066a261dabca0c11d277"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserDocument = async (userAuth) => {
  if(!userAuth)
    return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const craetedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        craetedAt
      })
    } catch (error) {
      console.log('error occured while creating the user ',error.message);
    }

    return userRef;
  }

}




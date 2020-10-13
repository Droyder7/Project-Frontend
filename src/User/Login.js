import React from 'react'

import firebase from 'firebase/app';
import auth from '../config/auth';


const Login = ( ) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
  }
    return (
        <div>
            <h6>Looks Like you haven't logged in yet so,</h6>
            <h4>Login First</h4>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
  )
}

export default Login

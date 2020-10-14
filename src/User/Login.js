import React from 'react'
import firebase from 'firebase/app';
import errorCaught from './errorCaught';

const Login = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                window.alert("Welcome " + user.displayName + "\nYou have been login successfully");
            })
            .catch(errorCaught);
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

import React from 'react'
import errorCaught from './errorCaught'
import auth from '../config/auth';

const SignOut = () => {

  return auth.currentUser && (
    <button className="row btn btn-success" onClick={() => auth.signOut()
    .then(() => {
                window.alert("You have been logged out successfully ");
            })
            .catch(errorCaught)}>Sign Out</button>
  )
}

export default SignOut

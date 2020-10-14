import React, { useState } from 'react'
import SignUpImage from '../Assets/google-sign-in.png'
import firebase from 'firebase/app';
import auth from '../config/auth';
import Base from '../Core/Base'
import { Link } from 'react-router-dom';


const LogInWithGoogle = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, email, password, success, error } = values; // object destructured

    const signUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const handleChange = name => event => {
        setValues({ ...values, error: "", [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        console.log("set values are: " + JSON.stringify(values));

        // this is the method which actually send the data to the server containing the user information to get loaded.

        // signup({ name, email, password }) // this methods automatically sends an request to the server and returns a server side response, that we need to deal accordingly
        //     .then(data => {
        //         if (data.err) {
        //             setValues({ ...values, error: data.err, success: false });
        //         }
        //         else {
        //             // we have a got a good response from the server and signup is successful, 
        //             setValues({
        //                 ...values,
        //                 name: "",
        //                 email: "",
        //                 password: "",
        //                 error: "",
        //                 success: true,
        //             }); //setting the state once again
        //             // console.log(`Data that has come back: `+ JSON.stringify(data));
        //         }
        //     })
        //     .catch(err => {
        //         console.log("Error is: " + err + "\n cannot connect to the server.");
        //     });
    };

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange("name")}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" onChange={handleChange("email")} type="email"
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input className="form-control"
                                value={password}
                                onChange={handleChange("password")} type="password" />
                        </div>
                        <div className="btn btn-success btn-block" onClick={onSubmit}>Submit</div>
                    </form>
                </div>
            </div>
        );
    }

    const successMesssage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">

                    <div className="alert alert-sucess"
                        style={{ display: success ? "" : "none" }}
                    >
                        New Account was created sucessfully. Please <Link to="/signin">Login Here</Link>
                    </div>
                </div>
            </div>
        );
    };

    const errorMesssage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    };


    return (
        <Base title="SignUp Page" description="A page for a user to SignUp!">
            {successMesssage()}
            {errorMesssage()}
            {signUpForm()}
            <div className="row" >
                <div className="col-md-6 offset-sm-3 text-left">
                    <p className="text-white text-center font-weight-bold">Or</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <button onClick={signUpWithGoogle} type="submit">
                        <img src={SignUpImage} alt="Sign Up with google" height="50" className="bg-dark" />
                    </button>
                </div>
            </div>
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default LogInWithGoogle

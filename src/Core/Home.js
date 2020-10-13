import React from 'react'
import Base from './Base'
import SignOut from '../User/SignOut';

const Home = () => {
    return (
        <div>
            <Base title="Home Page" description="This is our Home Page" >
                <h3>You are logged in Successfully</h3>
                <div className="col bg-dark text-white">
                    <SignOut />
                </div>
            </Base>
        </div>
    )
}

export default Home
import React from 'react'
import Base from './Base'

const Home = () => {
    return (
        <div>
            <Base title="Home Page" description="This is our Home Page" >
                <div className="col bg-dark text-white">
                    <div className="row btn btn-success">left side</div>
                </div>
            </Base>
        </div>
    )
}

export default Home
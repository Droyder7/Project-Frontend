import React from 'react'
import  "./Base.css";

const Base = ({
    title,description,children
}) => {
    return (
        <div>
            <h1 className="align-center">{title}</h1>
            <h4 className="left-align">{description} </h4>
            {children}
        </div>
    )
}

export default Base

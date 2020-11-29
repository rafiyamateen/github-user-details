import React from 'react'
import './NotFound.css'
import notFound from './../Images/notFound.png'

const NotFound = () => {
    return (
        <div id='notFound'>
            <p>This User name does not exist on Github!
            <br />
            Please enter a valid user name.</p>
            <h1>404

            <img src={notFound} alt='Not Found' />
            </h1>
        </div>
    )
}
export default NotFound
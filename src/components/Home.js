import { useState } from 'react';
import React from 'react';
//import { Component} from react

import Login from '../components/Login';
import Register from '../components/Register';


const Home = () => {
    const [openLoginModal, setLoginModal] = useState(false);
    const [openRegisterModal, setRegisterModal] = useState(false);

    return(
        <>
        <div className="container">
            <div className="banner-text">
                <h1>CLYDESIDE CHILDREN'S HOSPITAL</h1>
        
            </div>
            <div className="btns">
                <button className="btn login-btn" onClick={() => {setLoginModal(true)}}>Login</button>
                <button className="btn signup-btn" onClick={() => {setRegisterModal(true)}}>Register</button> 
            </div> 

            {openLoginModal && <Login closeModal={setLoginModal} />}
            {openRegisterModal && <Register closeModal={setRegisterModal} />} 
        </div>
        </>
    )
}

export default Home;
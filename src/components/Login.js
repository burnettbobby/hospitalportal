import React from "react";

const login = ({closeModal}) =>{

    return(
        <>
        <div className="modal">
          <div className="x-btn login-x" onClick={() => {closeModal(false)}}>
            &times;
          </div>
          <div className="form-header">
            <h1>Welcome</h1>
            <h3>Login</h3>
          </div>
          <form className="form">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="fas fa-key"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="button">Login</button>
          </form>
        </div>
        </>
    )
}

export default login;
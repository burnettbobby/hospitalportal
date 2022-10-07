import './css/app.css';
// import Login from './components/Login';
// import Register from './components/Register';
import Hello from './components/Hello';
import Message from './components/Message';
import Patient from './components/Patient';
import Department from './components/Department';
import Medication from './components/Medication';
import Counter from './components/counter';

// const signupModal = document.querySelector(".signup-form-wrapper");
// const loginModal = document.querySelector(".login-form-wrapper");
// const signupBtn = document.querySelector(".signup-btn");
// const loginBtn = document.querySelector(".login-btn");
// const signupX = document.querySelector(".signup-x");
// const loginX = document.querySelector(".login-x");
// const formContainer = document.querySelector(".form-container");

// signupBtn.addEventListener("click", () => {
//   signupModal.classList.add("display");
//   formContainer.classList.add("disable");
// });

// loginBtn.addEventListener("click", () => {
//   loginModal.classList.add("display");
//   formContainer.classList.add("disable");
// });

// signupX.addEventListener("click", () => {
//   signupModal.classList.remove("display");
//   formContainer.classList.remove("disable");
// });

// loginX.addEventListener("click", () => {
//   loginModal.classList.remove("display");
//   formContainer.classList.remove("disable");
// });

const App = () =>{

  return (
    <div className="App">
      <>
   
      <Counter></Counter>
  
     


        </>
      {/* <div className="container">
      <div className="banner-text">
        <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
        <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
      </div>
      <div className="btns">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Register</button>
      </div>
      <div className="form-container"> */}
        {/* signup container */}
        {/* <Login/> */}

        {/* login container */}
        {/* <Register/> */}
      {/* </div>
    </div> */}

    </div>
  );
}

export default App;

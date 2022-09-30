import './css/app.css';
import login from './components/Login';
import register from './components/Register';

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="banner-text">
        <h1>WELCOME TO CLYDE CHILDRENS HOSPITAL</h1>
        <p>LOGIN OR REGISTER TO ENTER THE HOSPITAL PORTAL</p>
      </div>
      <div className="btns">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Register</button>
      </div>
      <div className="form-container">
        {/* signup container */}
        
        {/* login container */}
      </div>
    </div>

    </div>
  );
}

export default App;

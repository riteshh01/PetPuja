import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios";

const LoginPopUp = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext);

  const [currState, setCurrState] = useState("Sign Up");
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false
  });

  const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prev => ({...prev, [name]: value}));
  };

  const onLogin = async (event) => {
      event.preventDefault();

      // ❗ CHECKBOX VALIDATION
      if (!data.agree) {
        alert("You must agree to the terms before continuing.");
        return;
      }

      let newUrl = url;
      if(currState === "Login"){
          newUrl += "/api/user/login";
      }
      else{
        newUrl += "/api/user/register";
      }

      const response = await axios.post(newUrl, data);

      if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
      }
      else{
        alert(response.data.message);
      }
  };

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
           <div className="login-pop-up-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
           </div>

          <div className="login-pop-up-inputs">
            {currState === "Login" ? null : (
              <input 
                name='name'
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder='Your name'
                required
              />
            )}

            <input
              name='email'
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder='Your email'
              required
            />

            <input
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder='Password'
              required
            />
          </div>

          <div className="login-popup-condition">
            <input
              type="checkbox"
              id="agree"
              checked={data.agree}
              onChange={(e) =>
                setData(prev => ({ ...prev, agree: e.target.checked }))
              }
              required
            />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>

          <button type='submit'>
            {currState === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {currState === "Login"
          ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
          : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          }
        </form>
    </div>
  )
}

export default LoginPopUp;
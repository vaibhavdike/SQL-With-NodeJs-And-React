import './Register.css'
import axios from "axios";
import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';


export default function Register() {
  

const [Username,setUsername]=useState("");
const [Email,setEmail]=useState("");
const [Password,setPassword]=useState("");
const [PasswordAgain,setPasswordAgain]=useState("");
 

  const navigate=useNavigate();

 


  
  const handleClick=async(e)=>{
      e.preventDefault();
 const user={
    username:Username,
    email:Email,
    password:Password
}
 await axios.post("http://localhost:8000/user",user);
 console.log(user);
  navigate('/login');

    }
 

  return (
    
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
          <h3 className="loginLogo">Accredian</h3>
          <span className="loginDesc">
            Connect with friends and world around you on Accredian.
          </span>
            </div>
            <div className="LoginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input className='loginInput' required  placeholder='Username' value={Username} onChange={(e)=>{setUsername(e.target.value)}} />
                    <input className='loginInput' required placeholder='Email' type='email' value={Email} onChange={(e)=>{setEmail(e.target.value)}}  />
                    <input className='loginInput' required  placeholder='Password' type='password' minLength="6" value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <input className='loginInput' required  placeholder='Re-Enter Password' type='password'  value={PasswordAgain}  onChange={(e)=>{setPasswordAgain(e.target.value)}} />
                    <button className="loginButton" type="submit">Sign Up</button>
                   <Link to="/login" style={{textDecoration:"none" , width: "100%", display: 'flex', justifyContent: 'center' }}>  <button className="loginRegisterButton">Log into Account</button> </Link>
 
                </form>
            </div>
        </div>
      
    </div>
  )

}
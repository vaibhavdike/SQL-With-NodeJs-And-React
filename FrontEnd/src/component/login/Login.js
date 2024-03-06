import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import axios  from 'axios';
export default function Login() {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
 const handleClick=async(e)=>{
e.preventDefault();
try{
console.log(email);
const res = await axios.get("http://localhost:8000/get", {
  params: {
    email: email // Pass email as a query parameter
  }
});
console.log(res.data);



}catch(err){
    console.log(err);
}




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
          <form className="loginBox" onSubmit={handleClick} >
            <input className='loginInput' type="email" placeholder='Email' require value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className='loginInput' type="Password" placeholder='Password' require minLength="6" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className="loginButton" >Log In</button>
            <span className="loginForgot">Forgot password?</span>
            <Link to="/" style={{textDecoration:"none" , width: "100%", display: 'flex', justifyContent: 'center' }}>   <button className="loginRegisterButton"> Create New Account</button></Link>
          </form>
        </div>
      </div>

    </div>
  )
}

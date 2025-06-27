import React from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import {useState} from 'react'
import {login, signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
   
  const [signState, setSignState]= useState("Sign In");
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [loading, setLoading]= useState(false);


  const user_auth= async (event)=>{
  event.preventDefault();
  setLoading(true);
  if( signState === "Sign In"){
    await login(email, password);
  }
  else{
    await signup(name, email, password);
  }
  setLoading(false);
}


  return (
   
    loading? <div className="login-spinner">
      <img src={netflix_spinner}/>
    </div>:

    <div className="login">
        <img src={logo} className="loginLogo" alt="" />
        <div className="loginform">
          <h2> {signState} </h2>
          <form >
            {signState=== "Sign Up" ?
            <input  type="text" placeholder="Your name" value={name} onChange={(e)=> {setName(e.target.value)}}></input> : <></>}
            <input  type="email" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
            <button type="submit" onClick={user_auth}>{signState}</button>
            
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember"></input>
                <label htmlFor="remember">Remember me</label>
              </div>
              <p>Need help</p>
            </div>
          </form>

          <div className="formSwitch">
            {signState === "Sign Up" ?  
             <p>Already have account?<span onClick={()=>{ setSignState("Sign In")}}>Sign in now</span></p> : 
             <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up now</span></p> }
           
           
          </div>
        </div>
    </div>
  )
}

export default Login
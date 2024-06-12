
import React from 'react'
import { useState } from 'react'
import { Route } from 'react-router-dom';

import Routee from './Routee';


function Login() {
  const[logindetails,SetLoginDetails]=useState({"email":"","password":""})
  const[validate,SetValidate]=useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let name="",value="";
  function handleInput(e)
  {
   
name=e.target.name;

value=e.target.value;

SetLoginDetails({...logindetails,[name]:value})


  }
  function check(e)
  {
    e.preventDefault();
    fetch(`http://localhost:8081/user/login?email=${logindetails.email}&password=${logindetails.password}`).then(response=>response.json()).then((res)=>{if(res==true)
  {
   
     SetValidate("");
     setLoggedIn(true);
  }
  else
  {
    SetValidate("Incorrect Username or password please enter your correct username and password")
  }
  })
  }
  return (
    <div>
      {loggedIn?(<div> <Routee/></div>):(
     
        <div>
         <h2 id="sighed">Login to Explore Our Air Pollution Community Website</h2>
        <h4 id="wrong">{validate}</h4> 
        <form onSubmit={check}><br/><br/>
        <label>Enter your email</label> <br/> <input class="inputborder"  id="psw" type="email" name='email' onChange={handleInput} value={logindetails.value} ></input> <br/><br/>
        <label>Enter your password</label> <br/> <input class="inputborder" id="psw" type="Password" name="password" onChange={handleInput}></input> <br/><br/><br/>
         <button className="button" >Login</button>
        </form>
        </div>
)}
    </div>
  )
}

export default Login
import React from 'react'
import { useState,useEffect } from 'react';
import Login from './Login';
import Csp from './Csp';
import { useNavigate } from 'react-router-dom';
import './signup.css'; 


function Singup() {
  const[singupdetails,SetSingupDetails]=useState({"firstName":"","lastName":"","userEmail":"","pasword":""})
  const [data,setData]=useState({});
  const [count,setCount]=useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
 //  const navigate=useNavigate();
  

  let  name="",value="";
function handleInput( e)
  {
    name=e.target.name
     value=e.target.value
     SetSingupDetails({...singupdetails,[name]:value})

  }
  function call(e) {
    e.preventDefault();
    // axios.post('http://localhost:8081/flightreservation/signup',singupdetails).then(res=>{
    //   let data =res.data;
    //   setData(data);
    //   if(res.status===200)
    //   navigate("/login")
    //   SetSingupDetails({"firstName":"","lastName":"","userEmail":"","pasword":""})
    //   })


     
      fetch('http://localhost:8081/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(singupdetails)
    })
    .then(response => {
      if( response.status === 200 )
      {
       
       setLoggedIn(true);
        SetSingupDetails({"firstName":"","lastName":"","userEmail":"","pasword":""});
      }
        
    })

    }
   function move()
   {
    setLoggedIn(true);
   }

  
  return (
    
    <div className="signup-container">
     {  loggedIn?(
             <div>
                      
                <Login/>
             </div>


       ):(
    <div>
         <h2 id="sighed" >Welcome to Our Air Pollution Community Service Project</h2>

        <form onSubmit={call}>
          <br/>
     <label>First Name</label>  <br/>    <input required id="psw"  class="inputborder" value={singupdetails.firstName} onChange={handleInput}  name="firstName" type="text"></input><br/><br/>
     <label>Last Name</label>     <br/>  <input required  id="psw" class="inputborder" value={singupdetails.lastName}  onChange={handleInput}  name="lastName" type="text"></input><br/><br/>
     <label>Email</label>    <br/>      <input required id="psw"  class="inputborder"  value={singupdetails.userEmail}  onChange={handleInput} name="userEmail" type="email"></input><br/><br/>
     <label>password</label> <br/>      <input required id="psw" class="inputborder" value={singupdetails.pasword}  onChange={handleInput}  name="pasword" type="password"></input><br/><br/>
     <button className="button">Singup</button>
        <button className="button" onClick={move}> Login
        </button>
        </form>
       
    </div>)
}

    </div>
  );
}

export default Singup
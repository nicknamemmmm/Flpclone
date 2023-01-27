import React, { useEffect, useState } from 'react'
import  toast  from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData,setUserData] = useState();
    const router =useNavigate();
    useEffect(()=>{
        console.log("userData update")
        if(userData){
            const tostoreUserData = JSON.stringify(userData);
            
            localStorage.setItem("userData",tostoreUserData);
            //router('./login')
            alert("submited");
        }
    },[userData])

    useEffect(()=>{
        const locaStorageData = JSON.parse(localStorage.getItem("isUesrLogIn"));
        if(locaStorageData){
           router('/');
        }
       },[])
  



    function submitHandle(e){
      e.preventDefault();
        
        setUserData({name:"yogesh",
        email:"abc@email.com",
        password:"abc" })

    }
    console.log(userData,"userdat is here")
  return (
    <div style={{marginLeft:"40%"}}>
        <h1>Register</h1>
      <form onSubmit={submitHandle} >
        <label>Name</label><br/>
        <input type='text'/><br/>
        <label>Email</label><br/>
        <input type='Email'/><br/>
        <label>Password</label><br/>
        <input type='Password'/><br/>
        <input type='submit'/><br/>
      </form>
      <a href='./login'>Aleready user ? login</a>
    </div>
  )
}

export default Register

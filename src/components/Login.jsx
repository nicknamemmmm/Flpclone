import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userlogInData, setUserlogInData] = useState();
  console.log (userlogInData,"userlaogdata heree")
     const router = useNavigate();

  useEffect(()=>{
    if(userlogInData){
      const registeredData = JSON.parse(localStorage.getItem("userData"));
      console.log(registeredData,"registerd data here")
      if(registeredData){
       if(registeredData.email===userlogInData.email &&  registeredData.password===userlogInData.password){
        localStorage.setItem("isUesrLogIn","true");
        router('/');
       alert("login succesfull")
        }else{
          alert("wrong credential")
          }

      }else{
        alert("user not found !!")
      }
    }
  },[userlogInData])

     useEffect(()=>{
      const locaStorageData = JSON.parse(localStorage.getItem("isUesrLogIn"));
      if(locaStorageData){
         router('/');
      }
     },[])

     const handleSubmit =(e)=>{
      e.preventDefault();
        alert("login working")
        setUserlogInData({
          email:"abc@email.com",
          password:"abc"
        })

     }
  return (
    <div  style={{marginLeft:"40%"}}>
      <h1 style={{color:"blue"}}>Login Page</h1>
      <form onSubmit={handleSubmit}>
      <lable>Email</lable><br/>
      <input type="email"/><br/>
      <lable>Password</lable><br/>
      <input type='password'/><br/>
      <input type='submit'/><br/>
      </form>
      <a href='./Register'>Regider here ? have ok yar</a>
    </div>
  )
}

export default Login

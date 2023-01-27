import  React,{useContext} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Router } from 'react-router-dom';
import userContext from './userContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const [userName,setuserName] = useState();
  const rout =useNavigate();
  useEffect(()=>{
    const dbstorage=JSON.parse(localStorage.getItem("userData"))
    if(dbstorage){
      setuserName(dbstorage.name);
    }
  },[])

  function Logout(){
    localStorage.removeItem("userData")
    localStorage.removeItem("isUesrLogIn")
    localStorage.removeItem("cartProducts")
    setuserName("");
    Router('./Login')
    alert("logout succesfull")
  }
  
    
  return (
    <div>
      <div style={{width:"100%","height":"30px","border":"1px solid red","display":"flex"}}>
        <div style={{"marginLeft":"00px","marginRight":"10px"}}>import</div>
        <div style={{"marginLeft":"200px","marginRight":"10px"}}>all pages</div>
        <div style={{"marginLeft":"40px","marginRight":"10px"}}>Header</div>
        <div style={{"marginLeft":"60px","marginRight":"10px"}}>S</div>
        <div style={{"marginLeft":"80px","marginRight":"10px"}}>{userName ? userName : "profile"}</div>
        <div style={{"marginLeft":"60px","marginRight":"10px","cursor":"pointer"}}onClick={Logout}>{userName ? "Logout":""}</div>
      </div>
    </div>
    
  )
}

export default Header

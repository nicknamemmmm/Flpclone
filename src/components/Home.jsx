
import React, { useState } from 'react'

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { useContext } from 'react';
import userContext from './userContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const router =useNavigate();
    

  
    
  return (
    <div>
      <Header/>
      <h1 >PRANAV RATHOD</h1>
      <button onClick={()=>router("./products")} >click</button>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const [cartProducts,setcartProducts]=useState();
    const router =useNavigate();
    useEffect(()=>{
        const cartproFromstorage=JSON.parse(localStorage.getItem("cartProducts"))
        if(cartproFromstorage){
            setcartProducts(cartproFromstorage);
        }else{
            alert("error")
        }

    },[])
    //use redirect in page login 23/1/22
    useEffect(()=>{
      const isUesrLogIn = JSON.parse(localStorage.getItem("User"))
      if( !isUesrLogIn){
        //router('./login')
      }
    })


  return (
    <div>
        <button onClick={()=> router('/Products')}>products</button>
        <h1>Cart Products</h1>
      {cartProducts && cartProducts.map((e,i)=>(
        <div key={i}>
            <img src={e.Poster}/>
            <h1>{e.Title}</h1>
            <h3>{e.Year}</h3>
            
        </div>
      ))}
    </div>
  )
}

export default Cart

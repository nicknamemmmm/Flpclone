import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css'
const Products = () => {
    
    const [movies,setMovies]= useState();
    const router=useNavigate();
    useEffect(()=>{
       async function gettingData(){
            const {data}=await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
            console.log(data,"data here")
            setMovies(data);
        }
        gettingData();
    },[])

    function addToCart(e){
        console.log(e,"e data here jsx");
        var prodFromlocalStorage=[]
         prodFromlocalStorage=JSON.parse(localStorage.getItem("cartProducts")) || [];
         prodFromlocalStorage.push(e)
        localStorage.setItem("cartProducts",JSON.stringify(prodFromlocalStorage))
        alert("product added to cart")
    }
  return (
    <div>
        <h1>All movies</h1>
        <button onClick={()=>router("/Cart")} >cart Page</button>
        <div style={{display:'flex'}}>
            <div style={{width:'30%',border:"1px solid red"}}>filter</div>
            <div style={{width:'70%',border:"1px solid red",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                {movies && movies.map((e,i)=>(
                    <div key={i} id='allfild' >
                         <div id='photo'>
                           <img src={e.Poster}/>
                           <div>
                            <h3>{e.Year}</h3>
                            <h3>{e.Title}</h3>
                            <p>{e.Runtime}</p>
                            <button onClick={()=>addToCart(e)}>Buy Now</button>
                           </div>
                         </div>
                        </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products

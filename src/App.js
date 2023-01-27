import { useState ,createContext } from "react";
import Home from "./components/Home";
import userContext from "./components/userContext";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  
  
  return (
    // <userContext.Provider value={name}>
    // <div style={{marginLeft:"40%"}}>
       
    //    <Home  />
       
    // </div>
    // </userContext.Provider>
    
    <div>
      
      <BrowserRouter>
        <Routes>
          
          <Route path='/'element={<Home/>} />
          {/* <Route path='/footer'element={<Footer/>}/>
          <Route path='/header'element={<Header/>} /> */}
          <Route path='/login'element={<Login/>} />
          <Route path ='/register'element={<Register/>}/>
          <Route path = '/Products'element={<Products/>}/>
          <Route path ='/Cart'element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";



function App() {

  

  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>

          <Route path="/About" element={<About />}/>

          <Route path="/Register" element={<Register />}/>

          <Route path="/Login" element={<Login />}/>
        </Routes>

    </BrowserRouter>
  )
  
}

export default App;

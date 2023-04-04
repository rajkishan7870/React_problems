import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Task from "./components/task";
import Color from "./components/color";


function App() {

  return (

    <div className='App'>
      {/* <Color/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task' element={<Task />} />
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;

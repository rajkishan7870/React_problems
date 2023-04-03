import React from "react";
import Profiles from "./components/horizontalScroller";
import Board from "./components/board";
import './App.css';


function App() {

  const profileArray = [{
    image : "https://media.gettyimages.com/id/1205030242/photo/young-mixed-race-businesswoman-smiling-to-camera.jpg?s=1024x1024&w=gi&k=20&c=SYgLIX6ALe0ziHsprQf0MMENF_VkBM8PBeD2I2GrSRw=" ,
    name : "Something" ,
    description : "CEO @ facebook",
    
  }, {
    image : "https://media.gettyimages.com/id/1205030242/photo/young-mixed-race-businesswoman-smiling-to-camera.jpg?s=1024x1024&w=gi&k=20&c=SYgLIX6ALe0ziHsprQf0MMENF_VkBM8PBeD2I2GrSRw=" ,
    name : "Something" ,
    description : "CEO @ amazon",
    
  }, {
  image : "https://media.gettyimages.com/id/1205030242/photo/young-mixed-race-businesswoman-smiling-to-camera.jpg?s=1024x1024&w=gi&k=20&c=SYgLIX6ALe0ziHsprQf0MMENF_VkBM8PBeD2I2GrSRw=" ,
  name : "Something" ,
  description : "Ceo @ flipkart",
 
}, {
  image : "https://media.gettyimages.com/id/1205030242/photo/young-mixed-race-businesswoman-smiling-to-camera.jpg?s=1024x1024&w=gi&k=20&c=SYgLIX6ALe0ziHsprQf0MMENF_VkBM8PBeD2I2GrSRw=" ,
  name : "Something" ,
  description : "CEO @ paypal",
  
}, {
  image : "https://media.gettyimages.com/id/1205030242/photo/young-mixed-race-businesswoman-smiling-to-camera.jpg?s=1024x1024&w=gi&k=20&c=SYgLIX6ALe0ziHsprQf0MMENF_VkBM8PBeD2I2GrSRw=" ,
  name : "Something" ,
  description : "CEO @ GOOGLE",
  
}]

  return(

    <div className = 'App'> 

        <div className='horizontalScroller'>
              <div className='heading'>
                  <h1>Horizontal Scroller</h1>
                  <p>Given below are few of the top best CEO's </p>
              </div>
                <div className="task1">
                  {profileArray.map((x)=>{
                    return(
                      <li><Profiles User ={x}/></li>
                    )
                  })}
                </div>
        </div>
                  <div>
                    <Board/>
                  </div>
    </div>
      


    
  )
  
}

export default App;

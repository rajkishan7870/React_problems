import React, {useState} from 'react'
import styles from './event.module.css'

export default function Event() {
    const [ans,setAns]= useState([]);


    function mouseOverh1(){
       

        setAns([...ans,{ 
        tag : "h1",
        event: "in",
        ontime : new Date().toLocaleTimeString()}])
    }

    function mouseOverh2(){
        
        setAns([...ans, { 
        tag : "h2",
        event: "in",
        ontime : new Date().toLocaleTimeString()}])
    }

    function mouseOverdiv(){
        
        setAns([...ans, {
        tag : "div",
        event: "in",
        ontime : new Date().toLocaleTimeString()}])
    }

    function mouseOuth1(){
        
        setAns([...ans, {
        tag : "h1",
        event: "out",
        ontime : new Date().toLocaleTimeString()}])
    }

    function mouseOuth2(){
        
        setAns([...ans, {
        tag : "h2",
        event: "out",
        ontime : new Date().toLocaleTimeString()}])
    }

    function mouseOutdiv(){
        
        setAns([...ans, {
        tag : "div",
        event: "out",
        ontime : new Date().toLocaleTimeString()}])
    }

  return (
    <div className = {styles.parentCont}>
        <div className ={styles.tag}>
            <h1 onMouseOver={mouseOverh1} onMouseOut={mouseOuth1} className = {styles.h1}>h1</h1>
            <h2 onMouseOver={mouseOverh2} onMouseOut={mouseOuth2} className = {styles.h2}>h2</h2>
            <div onMouseOver={mouseOverdiv} onMouseOut={mouseOutdiv} className = {styles.div}>div</div>
        </div>
        <table className = {styles.table}>
            <thead>          
                <tr>
                    <th className={styles.th}>Tag_Name</th>
                    <th>Event_Name</th>
                    <th>Time</th>
                </tr>

            </thead> 

            <tbody>

                {ans.map((element,key)=>{
                    return(
                        <tr key = {key}>
                            <td>{element.tag}</td>
                            <td>{element.event}</td>
                            <td>{element.ontime}</td>
                        </tr>
                    )
                })}

            </tbody> 

            
     
        </table>

    </div>
  )
}

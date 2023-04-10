import React, {useState} from 'react'
import styles from './table.module.css'


export default function Table() {

    const [value, setValue] = useState(Math.ceil(Math.random()*20));

    const tableData=[];
    for(let i=1;i<=10;i++){
        tableData.push(value*i)
    }
    

    function changeTable(){
        setValue(Math.ceil(Math.random()*20))
    }

  return (
    <div className = {styles.parentCont}>
        <h2 className = {styles.heading}>Table of {value} !!!</h2>
        <ul>
            {tableData.map((number,key)=>{
                return (
                <li className= {styles.tableContent} key = {key}>
                    {number}
                </li>
                )
                
            })}
        </ul>

        <button className = {styles.btn} onClick = {changeTable}>Change table</button>
        
    </div>
  )
}

import React,{useState} from 'react'
import styles from './greetings.module.css'

export default function Greetings() {

    const greeting = ["Hlo", "Hii", "Hola", "Good Evening", "Good morning", "Good afternoon"]

    const [msgInd,setMsgInd] = useState(0);
    function handleGreeting(){
        setMsgInd((msgInd+1)%greeting.length)
    }

  return (
    <div className={styles.parentCont}>
        <h1>{greeting[msgInd]}</h1>

        <button onClick={handleGreeting}>Next greeting</button>
    </div>
  )
}

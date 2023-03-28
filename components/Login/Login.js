import styles from './Login.module.css'
import { Link } from 'react-router-dom'



export default function Login(){
    return(

        <div className={styles.loginCont}>
            
            <div className = {styles.Login}>
                <input type="text" placeholder="Username"></input>
                <br></br>
                <input type="text" placeholder="password"></input>
                <div className={styles.button}>
                    <p>Do you have an account?
                        <Link to = '/Register'>Register</Link>
                    </p>
                    <button>Login</button>
                </div>
                
            </div>
        </div>
    )
}
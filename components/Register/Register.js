import styles from './Register.module.css';


export default function Register(){
    return(
        <div className={styles.Register}>
            <input type="text" placeholder="Email"></input>
            <br></br>
            <input type="text" placeholder="Username"></input>
            <br></br>
            <input type="text" placeholder="password"></input>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
}
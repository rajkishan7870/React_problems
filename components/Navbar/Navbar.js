import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return(
        <div className = {styles.Nav}>
            <p>UI/UX Designer</p>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/About'> About us</Link></p>
            <p><Link to='/Login'> Login</Link></p>
        </div>
    )
}
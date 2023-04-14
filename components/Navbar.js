import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div >
        <nav className={styles.parentNav}>
            <Link className = {styles.Link} to="/">Home</Link>
            <Link className={styles.Link} to = "/Contact">Contact</Link>
        </nav>
    </div>
  )
}

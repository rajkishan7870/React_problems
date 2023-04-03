import styles from "./horizontalScroller.module.css"
export default function Profiles(props) {

    return(
    <div className={styles.card}>
        <img src = {props.User.image} style={{width:'100px', height:'100px'}} alt="simple "/>
        <span className={styles.name}>{props.User.name}</span>
        <span className={styles.description}>{props.User.description}</span>
        
    </div>
    )
}
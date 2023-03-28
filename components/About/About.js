import styles from './About.module.css';

export default function About(){
    return(
        <div>
            <h2>About Us</h2>
            <div className={styles.parentCont}>
                <div className = {styles.imgCont}>
                    <img src="https://cdn.pixabay.com/photo/2023/02/19/08/39/man-7799486__480.jpg" alt="This is image"/>
                    <p>Age : 23</p>
                    <p>Location : India</p>
                </div>

                <div className = {styles.content}>
                    <p>Kishan Kumar</p>
                    <p>write something</p>
                    <div className = {styles.skillCont}>
                        <div className={styles.skills}>
                            <h3>Skills</h3>
                            <p>skills here</p>
                        </div>
                        <div className={styles.hobbies}>
                            <h3>Hobbies</h3>
                            <p>Hobbies here</p>

                        </div>
                        <div className={styles.learning}>
                            <h3>Learning</h3>
                            <p>Learning here</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
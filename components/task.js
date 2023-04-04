import { taskListAtom } from "./atom";
import { useRecoilValue } from 'recoil';
import { useNavigate } from "react-router-dom";
import styles from './task.module.css';

export default function Task() {


    const Navigate = useNavigate();
    const data = useRecoilValue(taskListAtom);

    function handleNavigate() {
        Navigate('/');
    }
    return (
        <div className={styles.parentCont}>
            <h1 className={styles.content}>Task Todo !!!</h1>
            <ul>
                {data.map((element, index) => {
                    return (
                        <li key={index}>{element}</li>
                    )
                })}
            </ul>

            <button className={styles.btn} onClick={handleNavigate}>Go to Homepage</button>

        </div>
    );
}
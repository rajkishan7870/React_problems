import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { taskListAtom } from './atom';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'
export default function Home() {

    const [value, setValue] = useState("");
    const [taskdata, setTaskdata] = useRecoilState(taskListAtom);
    const Navigate = useNavigate();

    function handleChangeValue(e) {
        setValue(e.target.value)
    }

    function handleAddTask() {
        setTaskdata([...taskdata, value])
        setValue('')
    }

    function handleTaskPage() {
        Navigate('/task')
    }
    return (

        <div className={styles.parentCont}>
            <h1>Add Task in Todo List !!!</h1>
            <input className={styles.inputData} value={value} type="text" placeholder="Enter some text" onChange={handleChangeValue} />
            <button className={styles.btn1} onClick={handleAddTask}>Add task +</button>
            <button className={styles.btn2} onClick={handleTaskPage}>Check Task</button>
        </div>

    );
}
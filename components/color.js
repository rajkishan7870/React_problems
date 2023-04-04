import { color } from "./atom";
import styles from "./color.module.css";
import { useRecoilState } from "recoil";

export default function Color(){

    const [isColorBlue,setIsColorBlue]=useRecoilState(color);

    function handleClick(){
        setIsColorBlue(!isColorBlue)
    }

    return(
        <div>
            <div className = {styles.content}>
                <h2 style = {isColorBlue ? {color: "red"} : {color: "blue"}}>
                    Hi, I change the color on clicking the button
                </h2>
                <button className = {styles.btn} onClick={handleClick}>Change color</button>
            </div>

        </div>
    );
}
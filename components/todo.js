import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import style from "./todo.module.css";

export default function Todo() {
  const [value, setValue] = useState("");

  const list = useSelector((state) => state);
  

  const dispatch = useDispatch();

  return (
    <div>
      <div className={style.parentContent}>
        <h1>Todo List !!!</h1>
        <div className={style.addtodo}>
            <input  value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {dispatch({ type: "ADD_TODO", payload: value });setValue("");}}>ADD</button>
        </div>
        <div className={style.todolist}>
            {list.map((x) => (
            <div key={x.id} className={style.list}>
                <span className={style.listitem}>{x.task}<button  onClick={() => dispatch({ type: "DELETE_TODO", payload: x })}>delete</button></span>
            </div>
            ))}

        </div>
      </div>
    </div>
  );
}

"use client"
import React from "react";
import "./main.css";
import { useAppStore } from "../../../store";
function Main() {
  const {setInputValue , setRow ,row ,inputValue} = useAppStore();
  const handleAdd = () =>{
    let arr={
      id:row.length +1,
      text:inputValue
    }
    setRow([...row, arr])
    console.log(setRow)
  }
  return (
    <div>
      <div className="container">
        <div>
          <h1>Simple todo list</h1>
          <p>This todo app for test design.</p>
        </div>
        <div>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value) }></input>
        <button onClick={handleAdd}>add new</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

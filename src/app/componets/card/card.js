import React from "react";
import "./card.css";
import { useAppStore } from "@/store";
function Card({ text , handleDelete}) {

  const {setInputValue , setRow ,row ,inputValue} = useAppStore();

  return (
    <div className="card">
      <h3>{text.text}</h3>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Card;

import React from "react";
import "./LevelCircles.css";

const pintarCirculos = (valor) => {
  if (valor === "Alto") {
    return ["pintado", "pintado", "pintado"];
  } else if (valor === "Medio") {
    return ["pintado", "pintado", ""];
  } else if (valor === "Bajo") {
    return ["pintado", "", ""];
  }
  return ["", "", ""];
};

const LevelCircles = ({ valor }) => {
  const circulos = pintarCirculos(valor);

  return (
    <div className="circlesContainer">
      <div className={`circle ${circulos[0]}`}></div>
      <div className={`circle ${circulos[1]}`}></div>
      <div className={`circle ${circulos[2]}`}></div>
    </div>
  );
};

export default LevelCircles;

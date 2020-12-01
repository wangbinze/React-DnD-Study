import React from "react";
import "./index.scss";

const Card = ({ task, empty }) => {
  return <div className={`card ` + (empty ? "card--empty" : "")}>{task}</div>;
};

export default Card;

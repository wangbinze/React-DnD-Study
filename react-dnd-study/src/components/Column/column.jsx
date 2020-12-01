import React from "react";
import './index.scss';
import DraggableCard from "../DraggableCard/draggableCard";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../pages/demo1/Constants";
import Card from '../Card/card';

const Column = ({ tasks: { title, tasks }, columnIndex, handleMoveMyTask }) => {
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: item => {
      const from = item;
      const to = { columnIndex };
      handleMoveMyTask(from, to);
    },
    canDrop: item => item.columnIndex !== columnIndex,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return (
    <div className="column" ref={dropRef}>
      <p className="column__title">{title}</p>
      <div className="column__cards">{cards}{isOver && canDrop ? <Card empty /> : ""}</div>
      <div className="column__add-task-input">
        <textarea type="text" placeholder="Type task here ..." />
        <button className="column__add-task-btn">Add Task</button>
      </div>
    </div>
  );
};

export default Column;

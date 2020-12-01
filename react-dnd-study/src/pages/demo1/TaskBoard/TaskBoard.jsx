import React, { useState } from 'react';
import { DndProvider } from "react-dnd";
import HTML5backend, { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../../../components/Column/column";
import CustomDragLayer from "../../../components/CustomDragLayer/customDragLayer";
import './TaskBoard.css';

function TaskBoard(props) {
    const [myTasks, moveMyTask] = useState(props.tasks);

    const handleMoveMyTask = (from, to) => {
        const { task, columnIndex: fromColumnIndex, index } = from;
        const { columnIndex: toColumnIndex } = to;
        const newMyTasks = [...myTasks];
        // remove task
        newMyTasks[fromColumnIndex].tasks.splice(index, 1);
        // move task
        newMyTasks[toColumnIndex].tasks.push(task);
        moveMyTask(newMyTasks);
    }

    const colums = myTasks.map((tasks, columnIndex) => {
        const propsToColumn = { tasks, columnIndex, handleMoveMyTask };
        return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
    })
    return (
        <DndProvider backend={HTML5Backend}>
            <CustomDragLayer />
            <div className="task-board">{colums}</div>
        </DndProvider>
    )
    
}

export default TaskBoard;
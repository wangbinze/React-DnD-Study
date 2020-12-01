import React, { useState } from 'react';
import ReactDom from 'react-dom';
import TaskBoard from './TaskBoard/TaskBoard'
import './index.css';
const tasks = [
    {
        title: "todo",
        tasks: ["Read chapters for next class"]
    },
    {
        title: "doing",
        tasks: ["Complete in-class activity", "Brainsotrm project ideas"]
    },
    {
        title: "done",
        tasks: []
    }
];
function Demo1Index() {
    return (
        <div className="box">
            <p>Demo1Index</p>
            <TaskBoard tasks={tasks} />
        </div>
    )
}

export default Demo1Index;
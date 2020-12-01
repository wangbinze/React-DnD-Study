import React from 'react';
import ReactDom from 'react-dom';
import Board from './Board';

export default function Index() {
    return (
        <div>
            <Board knightPosition={[0, 0]} />
        </div>
    )
}
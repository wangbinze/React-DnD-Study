import React from "react";
import { DragDropContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Box from './components/Box';
import Dustbin from './components/Dustbin';

function Demo3() {
  return (
    <>
      <h1>demo3</h1>
      <div style={{ paddingLeft: 200, paddingTop: 50 }}>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
      </div>
    </>
  )
}
export default DragDropContext(HTML5Backend)(Demo3);
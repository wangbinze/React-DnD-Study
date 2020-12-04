import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Box from './components/Box'
import Dustbin from './components/Dustbin'
function Demo4() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h1>demo4</h1>
      <Box></Box>
      <Dustbin></Dustbin>
    </DndProvider>
  )
}
export default Demo4;
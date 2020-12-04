import React from "react";
import { useDrag } from 'react-dnd';

const style = {
  width: 200,
  height: 50,
  lineHeight: '50px',
  backgroundColor: 'pink',
  margin: '30px auto'
}

const Box = () => {
  // 使用useDrag
  const [, drager] = useDrag({
    item: { type: 'Box' },  // 必填,必须为字符串
  })
  return (
    // 将第二个参数赋值给 ref
    <div ref={drager} style={style}>可拖拽组件Box</div>
  )
}
export default Box;
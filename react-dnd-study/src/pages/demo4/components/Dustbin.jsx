import React from "react";
import { useDrop, DropTargetMonitor } from 'react-dnd';

const style = {
  width: 400,
  height: 400,
  margin: '100px auto',
  lineHeight: '60px',
  border: '1px dashed black'
}

const Dustbin = () => {
  // 第一个参数是 collect 方法返回的对象，第二个参数是一个 ref 值，赋值给 drop 元素，
  const [collectedProps, drop] = useDrop({
    // accept 是一个标识，需要和对应的drag元素中的item的type值一致，否则不能感应
    accept: 'Box',

    // options： 可选的。一个普通的对象。
    // drop(item, monitor)： 可选的。当兼容项目放在目标上时调用。
    // hover(item, monitor)： 可选的。将项目悬停在组件上时调用。
    // canDrop(item, monitor)： 可选的。使用它来指定放置目标是否能够接受该物品。如果要始终允许它，则只需忽略此方法。

    // 函数，可选，返回的对象会成为 useDrop 的第一个参数，可以在组件中直接进行使用
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver()
    })
  })
  const bg = collectedProps.isOver ? 'deeppink' : 'white';
  const content = collectedProps.isOver ? '快松开,放到碗里来' : '将Box组件拖动到这里';

  return (
    // 将drop赋值给对应元素的ref
    <div ref={drop} style={{ ...style, background: bg }}>{content}</div>
  )
}

export default Dustbin;
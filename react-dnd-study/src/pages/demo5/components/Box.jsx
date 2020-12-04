/*
 * 被拖动的数据
 * Box
 * 用来生成界面上方的城市的 Box 组件
 */

import React from 'react';
import { useDrag } from "react-dnd";
import ItemTypes from '../ItemTypes';


let id = 1;
const Box = ({ bg, city, cardList, changeCardList }) => {
  // box样式
  const boxStyle = {
    background: bg,
    display: 'inline-block',
    margin: 20,
    padding: '16px 30px',
    width: 100,
    cursor: 'move'
  }
  // 声明box
  const box = {
    bg,
    city,
    type: ItemTypes.Card,
  };
  // 使用useDrag
  const [, drag] = useDrag({
    //这个是必填的  
    item: box,
    // 可选，拖动操作开始时触发。不需要返回任何内容，但是如果返回对象，它将覆盖item规范的默认属性
    /**
     * 
     * @param {*} DragSourceMonitor 是传递给的收集功能的对象DragSource。
     *                              它的方法使您可以获得有关特定拖动源的拖动状态的信息。
     *                              绑定到该监视器的特定拖动源在下面称为监视器的所有者
     */
    begin(monitor) {
      const useless = cardList.find((item) => item.id === -1);
      console.log(useless, 'useless');
      // 拖拽开始时，向 cardList 数据源中插入一个占位符，如果元素已经存在，就不再重复插入
      if (!useless) {
        console.log(changeCardList, 'changeCardList');
        changeCardList([{ bg: "aqua", city: '放这里', id: -1 }, ...cardList]);
      }
      console.log(box, 47)
      return box;
    },
    // 可选，当拖动停止时，end被调用
    end(_, monitor) {
      const uselessIndex = cardList.findIndex((item) => item.id === -1);
      console.log(uselessIndex, 'uselessIndex');
      /**
       * 拖拽结束时，需要对拖拽元素进行判断，是否放入了目标接收组件中
       * 1.是：则使用真正传入的box元素代替占位符
       * 2.否：则将占位符删除，恢复原样
       */
      if (monitor.didDrop()) {
        cardList.splice(uselessIndex, 1, { ...monitor.getItem(), id: id++ });
      } else {
        cardList.splice(uselessIndex, 1);
      }
      // 更新 cardList 数据源
      changeCardList(cardList);
    },
  })
  return (
    // 需要把第二个参数通过ref传递给div，这样才表明这个div是可以拖动的
    <div style={boxStyle} ref={drag}>
      {city}
    </div>
  )
}

export default Box;
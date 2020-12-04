import React from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

import ItemTypes from '../types';

// 样式
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const boxSource = {
  /**
   * 开始拖拽时触发当前函数
   * @param {*} props 组件的 props
   * 必填。
   * 当拖动开始时，beginDrag 被调用。
   * 必须返回描述被拖动数据的纯 JavaScript 对象。
   * 返回的内容会被放置到 monitor.getItem() 获取到的对象中。
   */
  beginDrag(props) {
    // 返回的对象可以在 monitor.getItem() 中获取到
    return {
      name: props.name
    }
  },
  /**
   * 拖拽结束时触发当前函数
   * @param {*} props 当前组件的 props
   * @param {*} monitor DragSourceMonitor 对象
   * 可选的。
   * 当拖动停止时，endDrag 被调用。
   * 对于每个 beginDrag，endDrag 都会对应。
   */
  endDrag(props, monitor) {
    // 当前拖动的 item 组件
    // monitor：一个 DragSourceMonitor 实例
    // 返回表示当前拖动项的普通对象。 每个拖动源都必须通过从其beginDrag（）方法返回一个对象来指定它。 如果没有拖动项目，则返回 null
    const item = monitor.getItem();

    // 拖拽元素时，返回表示最后记录的放置 drop result 对象
    const dropResult = monitor.getDropResult();

    // 如果 drop 结果存在，就执行一个方法，自己获取相关信息
    if (dropResult) {
      console.log(item, '----', dropResult);
    }
  }
}
// // 包装组件以使其可以拖动。接收三个必选参数的高阶组件。
// @DragSource(
//   // type 标识，这里时字符串 'box'
//   ItemTypes.BOX,
//   // 拖拽事件对象
//   boxSource,
//   // 收集功能函数，包含connect和monitor参考
//   // connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
//   (connect, monitor) => ({
//     // 包裹住 DOM 节点，使其可以进行拖拽操作
//     connectDragSource: connect.dragSource(),

//     // 是否处于拖拽状态
//     isDragging: monitor.isDragging(),
//   })
// )

function Box() {
  const { isDragging, connectDragSource, name } = this.props;
  const opacity = isDragging ? 0.4 : 1;
  // 使用 connectDragSource 包裹住 DOM 节点，使其可以接受各种拖动 API
  // connectDragSource 包裹住的 DOM 节点才可以被拖动
  return connectDragSource && connectDragSource(
    <div style={{ ...style, opacity }}>
      {name}
    </div>
  )
}

export default
  // 包装组件以使其可以拖动。接收三个必选参数的高阶组件。
  DragSource(
    // type 标识，这里时字符串 'box'
    ItemTypes.BOX,
    // 拖拽事件对象
    boxSource,
    // 收集功能函数，包含connect和monitor参考
    // connect 里面的函数用来将 DOM 节点与 react-dnd 的 backend 建立联系
    (connect, monitor) => ({
      // 包裹住 DOM 节点，使其可以进行拖拽操作
      connectDragSource: connect.dragSource(),

      // 是否处于拖拽状态
      isDragging: monitor.isDragging(),
    }))(Box);

Box.propsTypes = {
  name: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
}
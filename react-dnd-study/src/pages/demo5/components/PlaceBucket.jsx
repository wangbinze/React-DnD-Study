/*
 * 放置数据的位置和渲染
 *
 */

import React, { useCallback } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import ItemTypes from '../types/ItemTypes';
import Card from './Card';

const placeBucketStyle = {
  backgroundColor: 'white',
  border: '1px dashed gray',
  margin: '100px auto',
  minHeight: '300px',
  padding: '0 10px',
  textAlign: 'center',
  width: 300
}
const PlaceBucketList = ({ cardList, changeCardList }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.Card,  // 与Box.jsx 中的 useDrag -> item -> type 相同，表明传递的和接收的为同一个，否则会无法接收
  });

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    /**
     * 1.如果此时拖拽的组件是box组件，则dragIndex为undefined，则此时修改 cardList 中的占位元素的位置即可
     * 2.如果此时拖拽的组件时card组件，则dragIndex不为undefined，此时替换dragIndex 和 hoverIndex 位置的元素即可
     */
    console.log(dragIndex, 'dragIndex', 31)
    if (dragIndex === undefined) {
      const lessIndex = cardList.findIndex((item) => item.id === -1);
      console.log(lessIndex, 34)
      /**
       * API: {$splice: array of arrays}
       * 同数组的 splice 方法
       *      数组 arrays 中包含的是所有需要执行的操作集合
       *      元素 array 中第一个元素代表下标，第二个元素代表需要删除的个数，第三个元素代表需要插入到 initialArray 中的的元素
       * 
       * PS:  1、可以在 arrays 中执行多个集合；
       *      2、两个操作不是同时执行，而是按顺序执行，后面的操作会在前面一个操作的执行结果上执行
       */
      changeCardList(update(cardList, {
        $splice: [[lessIndex, 1], [hoverIndex, 0, { bg: "aqua", city: '放这里', id: -1 }]],
      }));
    } else {
      const dragCard = cardList[dragIndex];
      changeCardList(update(cardList, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
      }));
    }
    console.log(cardList, typeof cardList, 44)
  }, [cardList])

  const deleteCard = useCallback((index) => {
    console.log(index, 57, cardList)
    changeCardList(update(cardList, {
      // 和js中的splice使用方式相同
      $splice: [[index, 1]],
    }));
  })
  return (
    <div style={placeBucketStyle} ref={drop}>
      {
        cardList.length <= 0 ? <div style={{ lineHeight: '60px' }}>请选择城市</div>
          : cardList.map((item, index) => <Card index={index} key={item.id} moveCard={moveCard} {...item} deleteCard={deleteCard} />)
      }
    </div>
  )
}

export default PlaceBucketList;
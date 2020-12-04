import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// 组件
import Box from './components/Box';
import PlaceBucketList from './components/PlaceBucket';
import './index.css';

// 被拖动的元素列表,包含多个盒子
const boxs = [
  { id: 1, city: '北京', bg: 'red' },
  { id: 2, city: '上海', bg: 'yellow' },
  { id: 3, city: '天津', bg: 'orange' },
  { id: 4, city: '重庆', bg: 'purple' },
  { id: 5, city: '成都', bg: 'green' },
  { id: 6, city: '武汉', bg: 'pink' },
  { id: 7, city: '杭州', bg: 'red' },
];


const Demo5 = () => {
  const [cardList, setCardList] = useState([]);

  const changeCardList = (list) => {
    setCardList([...list])
  }

  useEffect(() => {
    console.log(cardList)
  }, [cardList])
  return (
    <>
      <p>demo5</p>
      <DndProvider backend={HTML5Backend}>
        {
          boxs.map((item) =>
            <Box key={item.id} {...item} cardList={cardList} changeCardList={changeCardList} />)
        }
        <PlaceBucketList cardList={cardList} changeCardList={changeCardList} />
      </DndProvider>
    </>
  )
}

export default Demo5;
import React, { useState } from 'react';
import CardItem from './CardItem'
import './index.css';
const CardList = [
    {
        title: 'first Card',
        id: 1,
        content: 'this is first Card'
    }, {
        title: 'second Card',
        id: 2,
        content: 'this is second Card'
    }, {
        title: 'third Card',
        id: 3,
        content: 'this is third Card'
    }
]
function Demo1Index() {
    const [CardLists, setCardList] = useState(CardList);
    return (
        <>
            <div className='card'>
                {CardLists.map((item, index) => {
                    return (
                        <CardItem
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            index={index}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Demo1Index;
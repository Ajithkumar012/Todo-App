//ctr + alt + R = rafce

import React from 'react'

import LineItem from './LineItem';

const ItemList = ({item, handleCheck, deleteTask}) => {
  return (
    <ul>
    {item.map((item) => (
        <LineItem
        item = {item}
        key={item.id}
        handleCheck={handleCheck}
        deleteTask={deleteTask}
        />

    ))}
        
    </ul>
    
  )
}

export default ItemList
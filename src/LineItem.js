import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";


const LineItem = ({item, handleCheck, deleteTask}) => {
  return (
    <li className='item' key={item.id}>
        <input type="checkbox"
            onChange = {()=>handleCheck(item.id)}
            checked={item.checked}

        />
        <label
        style = {(item.checked)?{textDecoration:'line-through', color:"green"}:{color:'red'}}
        onDoubleClick={()=>handleCheck(item.id)}
        >{item.task}</label>


        <FaRegTrashAlt 
        
        role='button'
        onClick={()=> deleteTask(item.id)}
        tabIndex="0"
        aria-label = {`Delete ${item.item}`}/>
        
      </li>
  )
}

export default LineItem
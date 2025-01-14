import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'
const AddTask = ({newItem, setNewItem, handleSubmit}) => {

  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Task</label>
        <input type="text" 
        autoFocus
        ref={inputRef}
        placeholder='Add Task' 
        id="addItem" 
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add Item'
        onClick={()=> inputRef.current.focus()}
        >
        <FaPlus />
        </button>
    </form>
  )
}

export default AddTask
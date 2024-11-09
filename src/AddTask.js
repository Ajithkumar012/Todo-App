import React from 'react'
import {FaPlus} from 'react-icons/fa'
const AddTask = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Task</label>
        <input type="text" 
        autoFocus
        placeholder='Add Task' 
        id="addItem" 
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add Item'
        >
        <FaPlus />
        </button>
    </form>
  )
}

export default AddTask
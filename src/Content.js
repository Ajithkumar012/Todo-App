import React from 'react'
import ItemList from './ItemList'


const Content = ({item, handleCheck, deleteTask}) => {
  
  return (
    // Fragments
    <> 
      {(item.length) ? (
        <ItemList

        
        item = {item}
        handleCheck={handleCheck}
        deleteTask={deleteTask}
        />
     
      ) : <p style={{color:"red", display:'flex', justifyContent:'center', alignItems :'center'}}>Your Task is Empty</p>}

    </>
  )
}

export default Content
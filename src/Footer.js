import React from 'react'

const Footer = ({itemLength}) => {

  return (
    <footer className='Footer'
    
    >{itemLength} List {itemLength === 1? "item": "items"} </footer>
  )
}

export default Footer
import React from 'react'

const Header = (props) => {
  return (
    <header className='Header'><h1>{props.title}</h1></header>
    
  )
}

// Header.defaultProps = {
//   title: "My ToDo's"
// }
export default Header
import React from 'react'

const SearchTask = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search">Serach</label>
        <input 
            type="text"  
            id='search'
            role ='searchbox'
            placeholder='Serach Task'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchTask
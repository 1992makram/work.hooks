import React from 'react'

function SearchMovie({setSearchByName}) {
  return (
    <div>
      <div className='search-container'>
        <input type='text' placeholder='type movie name to search'
        onChange={(e)=>setSearchByName(e.target.value)}/>
      </div>
    </div>
  );

};

export default SearchMovie;
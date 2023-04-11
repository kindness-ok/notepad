import React from 'react';
import { MdSearch  } from 'react-icons/md';

const Search = ({handleSearchValue, runIt}) => {
  return (
    <div className="search">
      <MdSearch 
        className='search-icons'
        size='1.3em'
        onClick={runIt}
      />
      <input 
        type='text' 
        placeholder='Search...' 
        onChange={(e) => handleSearchValue(e.target.value)}
      />
    </div>
  )
};

export default Search;

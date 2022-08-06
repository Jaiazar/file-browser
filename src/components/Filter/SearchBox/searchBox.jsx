import React from 'react';

export const SearchBox = ({placeholder, handleSearch}) => (
    <input 
        className= 'search'
        type='search' 
        placeholder= {placeholder}
        onChange={handleSearch}
    />
)


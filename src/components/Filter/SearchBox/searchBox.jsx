import React from 'react';

import './styles.css';

export const SearchBox = ({placeholder, handleSearch}) => (
    <input 
        className= 'search'
        type='search' 
        placeholder= {placeholder}
        onChange={handleSearch}
    />
)


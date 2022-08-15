import React from "react";
import { SearchBox } from "./SearchBox/searchBox";
import ViewButton from "./FileViewButton/ViewButton";
import './styles.css';

const Filter = ({sortUp, sortDown, gridView, listView, handleSelect, handleSearch}) => {

  return(
    <nav className="filter">

        <ViewButton 
          className="sort-up" 
          icon="fa-solid fa-sort-up" 
          handleView={sortUp}
        />
        <ViewButton 
          className="sort-down" 
          icon="fa-solid fa-sort-down" 
          handleView={sortDown}
        />
        
        {/* Sort options */}

        <select className="sort-options" onChange={handleSelect}>
          <option value="name">Name</option>
          <option value="size">Size</option>
          <option value="type">Type</option>
          <option value="created">Date Created</option>
          <option value="modified">Date Modified</option>
        </select>
        
        {/* Sort view button */}

        {/* <ViewButton 
          className="sort-by" 
          icon="fa-solid fa-sort" 
          handleView={handleClick}
        /> */}

      {/* File view buttons */}

      <ViewButton 
        className="view-list" 
        icon="fa fa-list" 
        handleView={listView}
      />
      
      <ViewButton 
        className="view-grid" 
        icon="fa fa-th-large" 
        handleView={gridView}
      />
      
      {/* For searching concret files on file-list */}

      <SearchBox 
        placeholder='search'
        handleSearch={handleSearch}
      />
    </nav>
  );
}

export default Filter;
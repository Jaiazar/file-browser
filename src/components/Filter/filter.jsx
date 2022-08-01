import React from "react";
import { SearchBox } from "./SearchBox/searchBox";
import ViewButton from "./FileViewButton/ViewButton";
import './styles.css';

const Filter = ({gridView, listView}) => {
  
  return(
    <nav className="filter">
      <section className="sort">
        <div><i className="fa-solid fa-sort-up"></i></div>
        <div><i className="fa-solid fa-sort-down"></i></div>
      </section>
      
      <select>
        <option value="name">Name</option>
        <option value="size">Size</option>
        <option value="type">Type</option>
        <option value="date-created">Date Created</option>
        <option value="date-modified">Date Modified</option>
      </select>
      
      <button>
        Filter
      </button>

      <ViewButton 
        className="view list" 
        icon="fa fa-list" 
        handleView={listView}
      />
      
      <ViewButton 
        className="view grid" 
        icon="fa fa-th-large" 
        handleView={gridView}
      />
      
      <SearchBox placeholder='search'
        handleChange={e=>console.log(e.target.value)}
      />
    </nav>
  );
}

export default Filter;
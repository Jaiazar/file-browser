import React from 'react';

const GridView = ({ items=[] }) => {

  const listItems = items.map(item => {
    return (
      <span className="grid-item">
        <i className="fa-solid fa-file"></i> <br />{item}
      </span>
    )
  });
  
  return (<div className="grid-view">{listItems}</div>)
}

export default GridView;

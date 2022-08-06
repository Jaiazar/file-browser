import React from 'react';

const GridView = ({ items, handlePreview }) => {

  const listItems = items.map(file => {
    return (
      <span key={file.name} className="grid-item" onClick={handlePreview}>
        <i className="fa-solid fa-file"></i>
        <div 
          className="file-data" 
          name={file.name} 
          type={file.type}
          capacity={file.size} // For some reason the word "size" is not recognized
          created={file.created}
          modified={file.modified}
        >
          {file.name}
        </div>
      </span>
    )
  });
  
  return (<div className="grid-view">{listItems}</div>)
}

export default GridView;

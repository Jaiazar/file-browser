import React from 'react';

const ListView = ({ items, handlePreview }) => {

  const listItems = items.map(file => {
    return (
      <li key={file.name} className="list-item" onClick={handlePreview}>
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
      </li>
    )
  });
  
  return (<ul className="list-view">{listItems}</ul>)
}

export default ListView;

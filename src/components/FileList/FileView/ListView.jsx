import React from 'react';

const ListView = ({ items=[] }) => {

  const listItems = items.map(item => {
    return (<li><i className="fa-solid fa-file"></i>{item}</li>)
  });
  
  return (<ul className="list-view">{listItems}</ul>)
}

export default ListView;

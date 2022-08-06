import React from 'react';
import ListView from "./ListView";
import GridView from "./GridView";

const ToggleView = ({ fileView, items, handlePreview }) => {
  
  return (
    <div className="toggle-view">
      {
        fileView 
        ? <ListView items={items} handlePreview={handlePreview} /> 
        : <GridView items={items} handlePreview={handlePreview} />
      }
    </div>
  );
}

export default ToggleView;
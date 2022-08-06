import React from "react";
import './styles.css';

const FilePreview = ({info}) => {
  return (
    <div className="file-preview">
      <div className="big-icon">
        <i className={ "fa-regular fa-file-" + info.type }></i>
      </div>
      <ul className="file-info">
        <li>Name: {info.name}</li>
        <li>Type: {info.type}</li>
        <li>Size: {info.size}</li>
        <li>Created: {info.created}</li>
        <li>Modified: {info.modified}</li>
      </ul>
    </div>
  );
}

export default FilePreview;
        
        
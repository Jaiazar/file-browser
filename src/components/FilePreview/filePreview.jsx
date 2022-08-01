import React from "react";
import './styles.css';

const FilePreview = () => {
  let type="audio";
  return (
    <div className="file-preview">
      <div className="big-icon">
        <i className={"fa-regular fa-file-"+type}></i>
      </div>
      <ol className="file-info">
        <li>Name: Don't stop me now!</li>
        <li>Type: .mp3</li>
        <li>Size: 180KB</li>
        <li>Created: 12-5-2018</li>
        <li>Modified: 13-4-2020</li>
      </ol>
    </div>
  );
}

export default FilePreview;
        
        
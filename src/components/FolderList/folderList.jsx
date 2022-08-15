import React /*, {useState}*/ from "react";
import './styles.css';
// import { folders } from "../../folders";
// import {folFil} from "../../folFil";

const FolderList = ({items, handleSubfolder}) => {
  
  const handleAccordion = (e) => {
    if(e.target.nextElementSibling.style.display === "none"){
      e.target.firstChild.className="fa-solid fa-folder-open"
      e.target.nextElementSibling.style.display="block";
    }else{
      e.target.firstChild.className="fa-solid fa-folder"
      e.target.nextElementSibling.style.display="none";
    }
  }

  return(
    <div className="folder-list">
      {items.map(
        folder => {
        return (
          <div key={folder.id}>
            <button onClick={(e) => handleAccordion(e)} className="w3-btn w3-block w3-black w3-left-align"> 
              <i className="fa-solid fa-folder-open"></i> {folder.name}
            </button>
            <div className="w3-container" value={folder.name}>
              {folder.content.map(
                subfolder => {
                  return (
                      <button 
                        className="w3-btn w3-block w3-left-align subfolder"
                        value={subfolder.name} 
                        key={subfolder.id}
                        parent={folder.name}
                        onClick={handleSubfolder}
                      >
                        <i className="fa-solid fa-folder">
                        &nbsp;&nbsp;{subfolder.name}
                        </i>
                      </button>
                  )
                }
              )}
            </div>
          </div>
          )
        })
      }
    </div>
  );
}

export default FolderList;
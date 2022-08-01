import React /*, {useState}*/ from "react";
import './styles.css';
import { folders } from "../../folders";

const FolderList = () => {
  // const [isOpen, setIsOpen] = useState(false);
  
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
      {folders.map(
        folder => {
        return (
          <div key={folder.key}>
            <button onClick={(e) => handleAccordion(e)} className="w3-btn w3-block w3-black w3-left-align"> 
              <i className="fa-solid fa-folder-open"></i> {folder.folder}
            </button>
            <div className="w3-container">
              <div className="subfolder"><i className="fa-solid fa-folder"> Folder inside folder </i></div>
              <div className="subfolder"><i className="fa-solid fa-folder"> Folder inside folder </i></div>
              <div className="subfolder"><i className="fa-solid fa-folder"> Folder inside folder </i></div>
            </div>
          </div>
          )
        })
      }
      

    </div>
  );
}

export default FolderList;
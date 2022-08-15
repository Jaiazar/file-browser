import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/filter';
import FolderList from './components/FolderList/folderList';
import FileList from './components/FileList/fileList';
import FilePreview from './components/FilePreview/filePreview';
import {myFiles1} from "./myFiles1";

function App() {

  // Folders list configuration
  const [subFolderFiles, setSubFolderFiles] = useState([]);

  const handleSubfolder = (e) => {
    const folderData = myFiles1.filter((folder)=> folder.name === e.target.getAttribute("parent"));
    const contentFolder = folderData[0].content.map((folder)=>folder);
    const subFolderData = contentFolder.filter((subFolder)=>subFolder.name === e.target.value);
    const contentSubFolder = subFolderData[0].content.map((subFolder)=>subFolder);
    setSubFolderFiles(contentSubFolder);
  };

  // Sort configuration

  const [sortFiles, setSortFiles] = useState(true);
  const sortUp = () => setSortFiles(true);
  const sortDown = () => setSortFiles(false);

  const [sortBy, setSortBy] = useState("name");
  const handleSelect = (e) => setSortBy(e.target.value);

//MUST HAVE OTHER WAY TO DO IT!!!!!!!!!!!

  const filter = (property) => {
    switch(property){
      case "name":
        if(sortFiles){
          subFolderFiles.sort((a,b)=>{
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
        }else{
          subFolderFiles.sort((a,b)=>{
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          })
        }
      break;
      case "type":
        if(sortFiles){
          subFolderFiles.sort((a,b)=>{
            if (a.type > b.type) {
              return 1;
            }
            if (a.type < b.type) {
              return -1;
            }
            return 0;
          })
        }else{
          subFolderFiles.sort((a,b)=>{
            if (a.type < b.type) {
              return 1;
            }
            if (a.type > b.type) {
              return -1;
            }
            return 0;
          })
        }
      break;
      case "size":
        if(sortFiles){
          subFolderFiles.sort((a,b)=>{
            if (a.size > b.size) {
              return 1;
            }
            if (a.size < b.size) {
              return -1;
            }
            return 0;
          })
        }else{
          subFolderFiles.sort((a,b)=>{
            if (a.size < b.size) {
              return 1;
            }
            if (a.size > b.size) {
              return -1;
            }
            return 0;
          })
        }
      break;
      case "created":
        if(sortFiles){
          subFolderFiles.sort((a,b)=>{
            if (a.created > b.created) {
              return 1;
            }
            if (a.created < b.created) {
              return -1;
            }
            return 0;
          })
        }else{
          subFolderFiles.sort((a,b)=>{
            if (a.created < b.created) {
              return 1;
            }
            if (a.created > b.created) {
              return -1;
            }
            return 0;
          })
        }
      break;
      case "modified":
        if(sortFiles){
          subFolderFiles.sort((a,b)=>{
            if (a.modified > b.modified) {
              return 1;
            }
            if (a.modified < b.modified) {
              return -1;
            }
            return 0;
          })
        }else{
          subFolderFiles.sort((a,b)=>{
            if (a.modified < b.modified) {
              return 1;
            }
            if (a.modified > b.modified) {
              return -1;
            }
            return 0;
          })
        }
      break;
      default:
        return;
    }
  }

  const handleClick = filter(sortBy);
    
// File view configuration

  const [fileView, setFileView] = useState(true);

  const gridView = () => setFileView(false);
  const listView = () => setFileView(true);

  //Search box configuration

  const [searchField, setSearchField]=useState("");

  const filteredFiles = subFolderFiles.filter(file =>
   file.name.includes(searchField));
  
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  }

  //Preview configuration

  const [info, setInfo] = useState({name: "", type: "", size: "", created: "", modified: ""});
  const handlePreview = (e) => {
    setInfo(
      {
        name: e.target.childNodes[1].attributes[1].nodeValue,
        type: e.target.childNodes[1].attributes[2].nodeValue,
        size: e.target.childNodes[1].attributes[3].nodeValue,        
        created: e.target.childNodes[1].attributes[4].nodeValue,        
        modified: e.target.childNodes[1].attributes[5].nodeValue,        
      }
    )
  }

  // Main code
  return (
    <div className="App">
      <Filter 
        sortUp={sortUp}
        sortDown={sortDown}
        gridView={gridView} 
        listView={listView}
        handleSelect={handleSelect}
        handleClick={handleClick}
        handleSearch={handleSearch}
      />
      <section className='directory'>
        <FolderList 
          items={myFiles1}
          handleSubfolder={handleSubfolder}
        />

        <FileList 
          fileView={fileView}
          items={filteredFiles}
          handlePreview={handlePreview}
        />
        <FilePreview info={info}/>
      </section>
    </div>
  );
}

export default App;
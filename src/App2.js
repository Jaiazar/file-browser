import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/filter';
import FolderList from './components/FolderList/folderList';
import FileList from './components/FileList/fileList';
import FilePreview from './components/FilePreview/filePreview';
import { myfiles } from './myfiles';

function App() {

  // Sort configuration

  const [sortFiles, setSortFiles] = useState(true);
  const sortUp = () => setSortFiles(true);
  const sortDown = () => setSortFiles(false);

  const [sortBy, setSortBy] = useState("name");
  const handleSelect = (e) => setSortBy(e.target.value);

//MUST HAVE OTHER WAY TO DO IT!!!!!!!!!!!

  const filter = (property) => {
    console.log(property);
    switch(property){
      case "name":
        if(sortFiles){
          myfiles.sort((a,b)=>{
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
        }else{
          myfiles.sort((a,b)=>{
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
          myfiles.sort((a,b)=>{
            if (a.type > b.type) {
              return 1;
            }
            if (a.type < b.type) {
              return -1;
            }
            return 0;
          })
        }else{
          myfiles.sort((a,b)=>{
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
          myfiles.sort((a,b)=>{
            if (a.size > b.size) {
              return 1;
            }
            if (a.size < b.size) {
              return -1;
            }
            return 0;
          })
        }else{
          myfiles.sort((a,b)=>{
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
          myfiles.sort((a,b)=>{
            if (a.created > b.created) {
              return 1;
            }
            if (a.created < b.created) {
              return -1;
            }
            return 0;
          })
        }else{
          myfiles.sort((a,b)=>{
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
          myfiles.sort((a,b)=>{
            if (a.modified > b.modified) {
              return 1;
            }
            if (a.modified < b.modified) {
              return -1;
            }
            return 0;
          })
        }else{
          myfiles.sort((a,b)=>{
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

    // if(sortFiles){
    //   myfiles.sort((a,b)=>{
    //     if (a.name > b.name) {
    //       return 1;
    //     }
    //     if (a.name < b.name) {
    //       return -1;
    //     }
    //     return 0;
    //   })
    // }else{
    //   myfiles.sort((a,b)=>{
    //     if (a.name < b.name) {
    //       return 1;
    //     }
    //     if (a.name > b.name) {
    //       return -1;
    //     }
    //     return 0;
    //   })
    // }

    
// File view configuration

  const [fileView, setFileView] = useState(true);

  const gridView = () => setFileView(false);
  const listView = () => setFileView(true);

  //Search box configuration

  const [searchField, setSearchField]=useState("");

  const filteredFiles = myfiles.filter(file =>
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
        <FolderList/>
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
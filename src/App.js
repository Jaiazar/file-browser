import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/filter';
import FolderList from './components/FolderList/folderList';
import FileList from './components/FileList/fileList';
import FilePreview from './components/FilePreview/filePreview'
import { myfiles } from './myfiles';

// Folders and files to show
  const items = myfiles.map(
    file => 
    {
      return (
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
      )
    }
  );

  // const a = []
  // items.forEach(item => {
  //   a.push(item.props)
  // } 
  // );

  // console.log(items);
  // console.log(a);

function App() {
  // Sort configuration
  
  const [sortFiles, setSortFiles] = useState(true);
  const sortUp = () => setSortFiles(true);
  const sortDown = () => setSortFiles(false);

  // const [sortFiles, setSortFiles] = useState()
  // const sortUp = setSortFiles(()=>items.sort);
  // const sortDown = setSortFiles(()=>items.reverse);

  // File view configuration
  const [fileView, setFileView] = useState(true);

  const gridView = () => setFileView(false);
  const listView = () => setFileView(true);

  //Search box configuration
  const [searchField, setSearchField]=useState("");

  const filteredFiles = items.filter(item =>
   item.props.name.includes(searchField));
  
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
    // console.log(e.target.childNodes[1].attributes[1].nodeValue);
    // console.log(e.target.childNodes[1].attributes[2].nodeValue);
    console.log(e.target)
  }

  // Main code
  return (
    <div className="App">
      <Filter 
        sortUp={sortUp}
        sortDown={sortDown}
        gridView={gridView} 
        listView={listView}
        handleSearch={handleSearch}
      />
      <section className='directory'>
        <FolderList/>
        <FileList 
          sortFiles={sortFiles}
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

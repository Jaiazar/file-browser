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
        <div className="file-name">
          {file.name}
        </div>
      )
    }
  );

function App() {
  // File view configuration
  const [fileView, setFileView] = useState(true);

  const gridView = () => setFileView(false);
  const listView = () => setFileView(true);

  //Search box configuration
  const [searchField, setSearchField]=useState("");

  const filteredFiles = items.filter(item =>
   item.props.children.includes(searchField));
  
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  }

  // Main code
  return (
    <div className="App">
      <Filter 
        gridView={gridView} 
        listView={listView}
        handleSearch={handleSearch}
      />
      <section className='directory'>
        <FolderList/>
        <FileList 
          fileView={fileView}
          // items={items}
          items={filteredFiles}
        />
        <FilePreview/>
      </section>
    </div>
  );
}

export default App;

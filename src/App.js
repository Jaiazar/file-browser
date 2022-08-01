import { useState } from 'react';
import './App.css';
import Filter from './components/Filter/filter';
import FolderList from './components/FolderList/folderList';
import FileList from './components/FileList/fileList';
import FilePreview from './components/FilePreview/filePreview'
import { myfiles } from './myfiles';

function App() {

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

  const [fileView, setFileView] = useState(true);
  const gridView = () => setFileView(false);
  const listView = () => setFileView(true);

  return (
    <div className="App">
      <Filter 
        gridView={gridView} 
        listView={listView}
      />
      <section className='directory'>
        <FolderList/>
        <FileList 
          fileView={fileView}
          items={items}
        />
        <FilePreview/>
      </section>
    </div>
  );
}

export default App;

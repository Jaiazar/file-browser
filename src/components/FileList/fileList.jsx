import React from "react";
import './styles.css';
import FilePath from "./FilePath/filePath";
import ToggleView from "./FileView/ToggleView";

const FileList = ({fileView, items}) => {
  return (
    <div className="file-list">
      <FilePath />
      <ToggleView fileView={fileView} items={items}/>
    </div>
  );
}

// list-view.jsx
// const ListView = ({ items=[] }) => {

//   const itemsElements = items.map(item => {
//     return (<li><i className="fa-solid fa-file"></i>{item}</li>)
//   });
  
//   return (<ul className="list-view">{itemsElements}</ul>)
// }

// grid-view.jsx
// const GridView = ({ items=[] }) => {

//   const itemsElements = items.map(item => {
//     return (<span className="grid-item"><i className="fa-solid fa-file"></i> <br />{item}</span>)
//   });
  
//   return (<div className="grid-view">{itemsElements}</div>)
// }

// list-grid-view.jsx

// const ToggleView = ({ items=[] }) => {
//   const [fileView, setFileView] = useState(<ListView items={items} />);
  
//   return (
//     <div className="list-grid-view">
//       <button onClick={()=>{
//         setFileView(<ListView items={items} />)
//         }
//       } >List</button>
//       <button onClick={()=>{
//         setFileView(<GridView items={items} />)
//         }
//       } >Grid</button>
//       {fileView}
//     </div>
//   );
// }

// const ListGridView = ({ items=[] }) => {
//   const [listView, setListView] = useState(true);
  
//   return (
//     <div>
//       <button onClick={()=>{
//         setListView(!listView)
//         }
//       } >Toggle</button>
//       {listView ? <ListView items={items} /> : <GridView items={items} />}
//     </div>
//   );
// }

// const items = myfiles.map(
//   file => 
//   {
//     return (
//       <div className="file-name">
//         {file.name}
//       </div>
//     )
//   }
// );

export default FileList;
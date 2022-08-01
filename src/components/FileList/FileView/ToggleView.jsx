import React/*, { useState }*/ from 'react';
import ListView from "./ListView";
import GridView from "./GridView";
// import { myfiles } from '../../../myfiles';

const ToggleView = ({ fileView, items }) => {
  
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
  
  return (
    <div className="toggle-view">
      {fileView ? <ListView items={items} /> : <GridView items={items} />}
    </div>
  );
}

// const ToggleView = ({ items=[] }) => {
//   const [fileView, setFileView] = useState(<ListView items={items} />);
  
//   return (
//     <div className="toggle-view">
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

export default ToggleView;
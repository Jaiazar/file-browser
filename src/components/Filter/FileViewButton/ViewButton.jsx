import React from 'react';

const ViewButton = ({className, icon, handleView}) => {
  return(
    <div className={className}
      onClick={handleView}>
      <i className={icon}></i>
    </div>
  )
}
export default ViewButton;
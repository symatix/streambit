import React from 'react';

const EquipmentBox = (props) => {
   return (
      <div className="equipment-box">
         <h4>{props.name}</h4>
         <p>{props.text}</p>
      </div>
   );
}

export default EquipmentBox;
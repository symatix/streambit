import React from 'react';
import EquipmentBox from './EquipmentBox';

const equipment = [
   {
      name:"MApollo Twin",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   },
   {
      name:"AKG C214",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   },
   {
      name:"TLAudio VP-1",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   }
]

const EquipmentList = (props) => {
   const renderEquipment = () => {
      return equipment.map(e => {
         return <EquipmentBox {...e} />
      })
   }

   return (
      <div className="row">
         {renderEquipment()}
      </div>
   );
}

export default EquipmentList;
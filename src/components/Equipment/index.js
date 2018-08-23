import React from 'react';
import Overview from '../Overview';
import EquipmentList from './EquipmentList';


const Equipment = (props) => {
   return (
      <main className="home-view">
         <Overview heading="studio equipment" />
         <EquipmentList />
      </main>
   );
}

export default Equipment;
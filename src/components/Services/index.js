import React from 'react';
import Overview from '../Overview';
import Services from './Services';


const Service = (props) => {
   return (
      <main className="home-view">
         <Overview heading="audio services" />
         <Services />
      </main>
   );
}

export default Service;
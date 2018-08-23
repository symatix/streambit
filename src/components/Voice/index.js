import React from 'react';
import Overview from '../Overview';
import Voices from './Voices';


const Voice = (props) => {
   return (
      <main className="home-view">
         <Overview heading="voice talents" />
         <Voices />
      </main>
   );
}

export default Voice;
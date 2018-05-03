import React from 'react';
import Gallery from './Gallery';
import Overview from './Overview';

const Home = (props) => {
   return (
      <main className="home-view">
         <Gallery />
         <Overview />
      </main>
   );
}

export default Home;
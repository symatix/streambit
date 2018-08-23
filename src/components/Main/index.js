import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Gallery from '../Gallery';
import Home from '../Home';
import Services from '../Services';
import Voice from '../Voice';
import Equipment from '../Equipment';
import AboutUs from '../AboutUs';

const Main = (props) => {
   return (
      <div>
         <Gallery />
         <div className="content">
            <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/services' component={Services}/>
               <Route exact path='/voice' component={Voice}/>
               <Route exact path='/equipment' component={Equipment}/>
               <Route exact path='/about' component={AboutUs}/>
            </Switch>
         </div>
      </div>
   );
}

export default Main;
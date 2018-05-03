import React from 'react';
import Icon from '../Icons/Icon';

const Overview = (props) => {
   return (
      <div className="overview">
         <h1 className="overview__heading"><strong>Next Workshop</strong> Zagreb</h1>

         <div className="overview__check-in">
            <Icon css="overview__icon-check-in" id="time" />
            <button className="btn-inline">Book Now</button>
         </div>
         
         <div className="overview__info">
            <div className="overview__info-date">26.5.2018.</div>
            <div className="overview__info-location">HR, Zagreb</div>
         </div>
      </div>
   );
}

export default Overview;
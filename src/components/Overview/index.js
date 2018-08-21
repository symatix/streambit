import React from 'react';
import Icon from '../Icons/Icon';

const Overview = (props) => {
   return (
      <div className="overview">
         <h1 className="overview__heading"><strong>{props.heading.split(" ")[0]}</strong> {props.heading.split(" ")[1]}</h1>

         <div className="overview__check-in">
            <Icon css="overview__icon-check-in" id="time" />
            <button className="btn-inline">Book Now</button>
         </div>
         
         <div className="overview__info">
            <div className="overview__info-date">portfolio</div>
            {/*<div className="overview__info-location">CV</div>*/}
         </div>
      </div>
   );
}

export default Overview;
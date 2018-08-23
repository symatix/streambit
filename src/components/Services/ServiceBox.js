import React from 'react';

const ServiceBox = (props) => {
   return (
      <div className="col-1-of-4">
         <div className="service-box">
            <h4>{props.name}</h4>
            <p>{props.text}</p>
         </div>
      </div>
   );
}

export default ServiceBox;
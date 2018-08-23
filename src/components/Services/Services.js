import React from 'react';
import ServiceBox from './ServiceBox';

const services = [
   {
      name:"Voice-Over",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   },
   {
      name:"Recording",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   },
   {
      name:"Mixing",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   },
   {
      name:"Live Sound",
      img:"#",
      text:"lapsus lingai nesto sere vamo tamo neki tekst"
   }
]

const Services = (props) => {
   const renderServices = () => {
      return services.map(s => {
         return <ServiceBox {...s} />
      })
   }

   return (
      <div className="row">
         {renderServices()}
      </div>
   );
}

export default Services;
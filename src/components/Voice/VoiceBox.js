import React from 'react';

const VoiceBox = (props) => {
   return (
      <figure className="voices">
         <figcaption className="voices__user">
            <img src={props.img} alt="User 1" className="voices__photo" />
               <div className="voices__user-box">
               
                  <button className="voices__btn">
                        <span className="voices__btn__visible">{props.name}</span>
                        <span className="voices__btn__invisible">HIRE</span>
                  </button>
               </div>
               <div className="voices__sample">{props.sample}</div>
         </figcaption>
         <blockquote className="voices__text">
            {props.mood}
         </blockquote>
      </figure>
   );
}

export default VoiceBox;
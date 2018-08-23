import React from 'react';
import VoiceBox from './VoiceBox';

const voices = [
   {
      id:1,
      name:"Marko Kitnjak",
      img:"img/user-1.jpg",
      sample:"",
      mood:"Casual, frendly"
   },
   {
      id:2,
      name:"Danijela Sakstina",
      img:"img/user-2.jpg",
      sample:"",
      mood:"Seductive, mellow"
   },
   {
      id:3,
      name:"Ana Banana",
      img:"img/user-3.jpg",
      sample:"",
      mood:"Aggressive, punchy"
   }
]

const Voices = (props) => {
   const renderVoices = () => {
      return voices.map(v => {
         return <VoiceBox key={v.id} {...v} />
      })
   }

   return (
      <figure className="container-voices">
         {renderVoices()}
      </figure>
   );
}

export default Voices;
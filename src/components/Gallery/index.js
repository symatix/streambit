import React from 'react';

const images = [
   {
      src: "/img/cover-oldie.jpg",
      alt: "Image One"
   },
]

const Gallery = (props) => {

   const renderGallery = () => {
      return images.map(({ src, alt}) => {
         return(
            <figure key={src} className="gallery__item">
               <img src={src} alt={alt} className="gallery__photo" />
            </figure>
         )
      })
   }

   return (
      <div className="gallery">
         {renderGallery()}
      </div>
   );
}

export default Gallery;
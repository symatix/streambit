import React from 'react';

const images = [
   {
      src: "/img/home-1.jpg",
      alt: "Image One"
   },
   {
      src: "/img/home-2.jpg",
      alt: "Image Two"
   },
   {
      src: "/img/home-3.jpg",
      alt: "Image Three"
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
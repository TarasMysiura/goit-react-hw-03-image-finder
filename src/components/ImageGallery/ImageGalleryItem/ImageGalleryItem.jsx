import React from 'react'
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({hits}) => {
  // console.log(hits);
  return hits.map(hit => {
    // console.log(hit.id);
  return (
    <li className={css.ImageGalleryItem} key={hit.id}>
      <img
        src={hit.webformatURL}
        alt={hit.tags}
        className={css.ImageGalleryItem_image}
      />
    </li>
  );

    
  } 
  
  );
};

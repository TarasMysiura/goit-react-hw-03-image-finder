import React from 'react';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({hits}) => {
  // console.log(hits);
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem hits={hits} />
    </ul>
  );
};

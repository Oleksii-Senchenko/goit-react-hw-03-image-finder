import React from 'react';
import css from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, toogleModal, getLargeImage }) {
  return (
    <ul className={css.ImageGallery}>
      {images.length > 0 &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            toogleModal={toogleModal}
            getLargeImage={getLargeImage}
          />
        ))}
    </ul>
  );
}

export default ImageGallery;

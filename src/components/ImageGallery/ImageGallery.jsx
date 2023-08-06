import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageList } from './ImageGallery.styled';

function ImageGallery({ images, toogleModal, getLargeImage }) {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          toogleModal={toogleModal}
          getLargeImage={getLargeImage} 
        />
      ))}
    </ImageList>
  );
}

export default ImageGallery;

import React from 'react';

import { ImageItem, ImageItemImage } from './ImageGalleryItem.styled';

function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  toogleModal,
  getLargeImage,
}) {
  const photoTranfer = () => {
    getLargeImage(largeImageURL);
    toogleModal()
  };

  return (
    <ImageItem onClick={photoTranfer}>
      <ImageItemImage src={webformatURL} tag={tags} />
    </ImageItem>
  );
}

export default ImageGalleryItem;

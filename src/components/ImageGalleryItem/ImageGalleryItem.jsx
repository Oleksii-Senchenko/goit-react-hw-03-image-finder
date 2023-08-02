import React from 'react';

import css from './ImageGalleryItem.module.css';
function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  toogleModal,
  getLargeImage,
}) {
  const photoTransfer = () => {
    getLargeImage(largeImageURL);
    toogleModal();
  };
  return (
    <li className={css.ImageGalleryItem} onClick={photoTransfer}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem;

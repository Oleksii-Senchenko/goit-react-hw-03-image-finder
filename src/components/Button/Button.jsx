import React from 'react';

import { LoadMore } from './Button.styled';
function Button({ loadMore }) {
  return <LoadMore onClick={loadMore}>Button</LoadMore>;
}

export default Button;

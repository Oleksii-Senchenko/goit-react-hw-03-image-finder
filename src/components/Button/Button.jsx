import React from 'react';
import css from './Button.module.css';

function Button({ loadMore }) {
  return (
    <button className={css.Button} onClick={loadMore}>
      Button
    </button>
  );
}

export default Button;

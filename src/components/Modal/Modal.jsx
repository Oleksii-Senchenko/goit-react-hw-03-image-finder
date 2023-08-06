import React, { Component } from 'react';

import { BackDrop } from './Modal.styled';
import { MadalFace } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.colseonEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.colseonEsc);
  }

  colseonEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.toogleModal();
    }
  };

  closeOnClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.toogleModal();
    }
  };

  render() {
    const { largeImage } = this.props;
    return (
      <BackDrop onClick={this.closeOnClickBackDrop}>
        <MadalFace>
          <img src={largeImage} alt="" />
        </MadalFace>
      </BackDrop>
    );
  }
}

export default Modal;

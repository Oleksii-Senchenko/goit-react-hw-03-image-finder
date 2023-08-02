import React, { Component } from 'react';

import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
  }

  closeOnClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.toogleModal();
    }
  };

  closeOnEsc = ({ code }) => {
    if (code === 'Escape') {
      this.props.toogleModal();
    }
  };

  render() {
    // const { toogleModal } = this.props;

    return (
      <div className={css.Overlay} onClick={this.closeOnClickBackDrop}>
        <div className={css.Modal}>
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

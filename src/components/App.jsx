import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import getImage from '../Api/Api';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    modalShown: false,
    largeImage: '',
    buttonVisible: false,
    loader: false,
  };

  takeValue = async () => {
    const { searchQuery, page } = this.state;
    this.setState({
      loader: true,
    });
    try {
      const { hits, totalHits } = await getImage(searchQuery, page);
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        buttonVisible: page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.error();
    } finally {
      this.setState({
        loader: false,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.takeValue();
    }
  }

  onChange = value => {
    this.setState({
      page: 1,
      images: [],
      searchQuery: value,
    });
  };

  toogleModal = () => {
    const { modalShown } = this.state;
    this.setState({
      modalShown: !modalShown,
    });
  };

  getLargeImage = largeImage => {
    this.setState({
      largeImage: largeImage,
    });
    console.log(largeImage);
  };

  loadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { images, modalShown, largeImage, buttonVisible, loader } =
      this.state;

    return (
      <div>
        <Searchbar onChange={this.onChange} />
        <ImageGallery
          images={images}
          toogleModal={this.toogleModal}
          getLargeImage={this.getLargeImage}
        />
        {loader && <Loader />}

        {buttonVisible && <Button loadMore={this.loadMore} />}

        {modalShown && (
          <Modal toogleModal={this.toogleModal} largeImage={largeImage} />
        )}
      </div>
    );
  }
}

export default App;

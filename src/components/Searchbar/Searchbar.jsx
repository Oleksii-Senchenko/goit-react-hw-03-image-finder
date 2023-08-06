import React, { Component } from 'react';

import {
  Header,
  Form,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;

    this.setState({
      searchQuery: value,
    });
  };

  onSubmit = e => {
    const { searchQuery } = this.state;
    const { onChange } = this.props;
    e.preventDefault();

    onChange(searchQuery);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

import PropTypes from 'prop-types';
import { useState } from 'react';
import searchIcon from '../../assets/svg/symbol.defs.svg';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <header className="searchbar">
      <form onSubmit={handleSubmit} className="searchform">
        <button type="submit" className="searchform-button">
          <svg className="icon" id="icon-search">
            <use href={searchIcon + '#icon-search'}></use>
          </svg>
          <span className="searchform-button-label">Search</span>
        </button>

        <input
          onChange={handleChange}
          className="searchform-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;

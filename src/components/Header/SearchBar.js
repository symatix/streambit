import React from 'react';
import Icon from '../Icons/Icon';

const SearchBar = (props) => {
   return (
      <form action="#" className="search">
         <input type="text" className="search__input" placeholder="Search" />
         <button className="search__button">
            <Icon css="search__icon" id="magnifying-glass" />
         </button>
      </form>
   );
}

export default SearchBar;
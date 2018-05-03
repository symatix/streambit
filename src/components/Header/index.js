import React from 'react';
import SearchBar from './SearchBar';
import Title from './Title';
import UserNav from './UserNav';
import Icon from '../Icons/Icon';

const Header = (props) => {
   return (
      <header className="header">
         <Icon css="logo" id="lighthouse" />
         <Title />
         <UserNav />
      </header>
   );
}

export default Header;
import React from 'react';
import Icon from '../Icons/Icon';

const UserNav = (props) => {
   return (
      <nav className="user-nav">
         <div className="user-nav__icon-box">
            <Icon css="user-nav__icon" id="notification" />
            <span className="user-nav__notification">13</span>
         </div>
         <div className="user-nav__user">
            <img src="img/user.jpg" alt="user" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Dino</span>
         </div>
      </nav>
   );
}

export default UserNav;
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icons/Icon';

const NavItem = (props) => {
   const { css, id, url, text, changeNav } = props;

   return(
      <li className={css} onClick={() => changeNav(id)}>
         <Link to={url} className="side-nav__link">
            <Icon css="side-nav__icon" id={id} />
            <span>{text}</span>
         </Link>
      </li>
   )
}

export default NavItem;
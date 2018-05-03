import React from 'react';
import Icon from '../Icons/Icon';

const navItems = [
   {
      id: "house",
      text: "Home",
      url: "#",
      active: true,
   },
   {
      id: "family-room",
      text: "Family",
      url: "#",
      active: false,
   },
   {
      id: "team",
      text: "Business",
      url: "#",
      active: false,
   },
   {
      id: "time",
      text: "Workshops",
      url: "#",
      active: false,
   },
   {
      id: "question",
      text: "About us",
      url: "#",
      active: false,
   },
]

const Navigation = (props) => {

   const renderItems = () => {
      return navItems.map(({ id, text, url, active }) => {
         const css = active
            ? ["side-nav__item", "side-nav__item--active"].join(' ')
            : "side-nav__item";

         return(
            <li className={css}>
               <a href={url} className="side-nav__link">
                  <Icon css="side-nav__icon" id={id} />
                  <span>{text}</span>
               </a>
            </li>
         )
      })
   }

   return (
      <nav className="sidebar">
         <ul className="side-nav">
            {renderItems()}
         </ul>

         <div className="legal">
            &copy; 2018 by Constellations. All rights reserved.
         </div>
      </nav>
   );
}

export default Navigation;
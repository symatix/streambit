import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavItem from './NavItem';
import { changeActiveNav } from '../../actions';

class Navigation extends Component{
   constructor(props){
      super(props);

      this.handleClick = this.handleClick.bind(this);
   }

   applyStyle(active){
      let css = "side-nav__item";

      if (active) {
         css =  [css, "side-nav__item--active"].join(' ')
      }
      return css
   }

   handleClick(id){
      const newNav = this.props.nav.map(n => n.id === id
         ? n = {...n, active: true }
         : n = {...n, active: false }
      )
      this.props.changeActiveNav(newNav)
   }

   renderItems(){
      return this.props.nav.map(({ id, text, url, active }) => {
         return <NavItem 
            changeNav={this.handleClick}
            key={id}
            css={this.applyStyle(active)} 
            url={url} 
            id={id} 
            text={text} />
      })
   }
   render(){
      return (
         <nav className="sidebar">
            <ul className="side-nav">
               {this.renderItems()}
            </ul>
            <div className="legal">
               &copy; 2018 by streamBit. All rights reserved.
            </div>
         </nav>
      );
   }
   
}

function mapStateToProps({ nav }){
   return { nav }
}
export default connect(mapStateToProps, { changeActiveNav })(Navigation);
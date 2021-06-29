import React from 'react';
import Button from './Button';
import "./Header.css";

class Header extends React.Component{
  render(){
    return(

      <div className="header">
        <h1 >Gallery of Horns </h1>
        <p > This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <Button />

      </div>
    );
  }
}
export default Header;
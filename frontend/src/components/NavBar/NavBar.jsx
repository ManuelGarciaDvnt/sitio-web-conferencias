import React from "react";
import './NavBar.css';
import logo from '../../static/logo.svg';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="company_logo" />
        </div>
        <div className="btn-menubar">
          <i className="fas fa-bars" />
        </div>
        <nav className="NavBar_nav">
          <a href="#">Conferencias</a>
          <a href="#">Calendario</a>
          <a href="#">Invitados</a>
          <a href="#">Reservaciones</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

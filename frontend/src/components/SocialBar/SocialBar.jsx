import React from "react";
import './SocialBar.css'

const SocialBar = () => {
  return (
    <nav className="Socialbar">
      <a className="bar_item" href="#">
        <i className="fab fa-facebook-f" />
      </a>
      <a className="bar_item" href="#">
        <i className="fab fa-twitter" />
      </a>
      <a className="bar_item" href="#">
        <i className="fab fa-pinterest" />
      </a>
      <a className="bar_item" href="#">
        <i className="fab fa-youtube" />
      </a>
      <a className="bar_item" href="#">
        <i className="fab fa-instagram" />
      </a>
    </nav>
  );
};

export default SocialBar;

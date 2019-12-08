import React from 'react';
import './Testimonial.css';
import profileImg from '../../static/testimonial.jpg'

const Testimonial = () => {
    return (
      <div className="Testimonial">
        <main className="Testimonial__text mb-1">
          <p>
            "Sed porta erat vel sapien egestas, vel commodo nulla maximus. Etiam
            pellentesque euismod diam quis mattis. Mauris vel tristique libero.
            Nullam vel neque tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec vitae quam erat. In posuere fermentum urna
            vitae tristique."
          </p>
        </main>
        <footer className="Testimonial__data">
          <figure className="Testimonial__profile-img">
            <img src={profileImg} />
          </figure>
          <div className="Testimonial__author">
            <p>Oswaldo Farro</p>
            <i>Desarrollador web LAMP</i>
          </div>
        </footer>
      </div>
    );
}

export default Testimonial;

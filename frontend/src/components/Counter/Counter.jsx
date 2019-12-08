import React from 'react';
import './Counter.css';

const Counter = () => {
    return (
      <div className="Counter parallax relative">
        <div className="container">
          <div className="e-resume">
            <div className="mb-2">
              <p className="number">9</p>
              <p>Invitados</p>
            </div>
            <div className="mb-2">
              <p className="number">4</p>
              <p>Talleres</p>
            </div>
            <div className="mb-2">
              <p className="number">9</p>
              <p>Días</p>
            </div>
            <div className="mb-2">
              <p className="number">9</p>
              <p>Conferencias</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Counter;

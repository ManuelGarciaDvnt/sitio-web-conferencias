import React from 'react';
import './CountDown.css';

const CountDown = () => {
    return (
      <section className="section">
        <h2>Faltan</h2>
        <div className="CountDown container">
          <div className="mb-2">
            <p className="number">39</p>
            <p>Dias</p>
          </div>
          <div className="mb-2">
            <p className="number">22</p>
            <p>Horas</p>
          </div>
          <div className="mb-2">
            <p className="number">33</p>
            <p>Minutos</p>
          </div>
          <div className="mb-2">
            <p className="number">49</p>
            <p>segundos</p>
          </div>
        </div>
      </section>
    );
}

export default CountDown;

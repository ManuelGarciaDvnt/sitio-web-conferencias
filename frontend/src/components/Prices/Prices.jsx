import React from 'react';
import PricesList from './PricesList';
import './Prices.css'

const Prices = (props) => {
    return (
        <section className="Prices section">
            <h2>Precios</h2>
            <div className="container">
                <PricesList/>
            </div>
        </section>
    );
}

export default Prices;

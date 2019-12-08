import React from 'react';
import './CardPrice.css';

const CardPrice = (props) => {
    return (
        <div className="CardPrice">
            <h3>Pase por día</h3>
            <p className="number">$19,90</p>
            <div className="CardPrice__details mb-2">
                <p><i className="fas fa-check"/>Bocadillos Gratis</p>
                <p><i className="fas fa-check"/>Todas las conferencias</p>
                <p><i className="fas fa-check"/>Todos los talleres</p>
            </div>
            <button className="btn btn-primary">Comprar</button>
        </div>
    );
}

export default CardPrice;

import React from 'react';
import GestList from './GestsList/GestList';

const Guests = () => {
    return (
        <section className="Guests">
            <div className="container section">
                <h2>Nuestros invitados</h2>
                <GestList/>
            </div>
        </section>
    );
}

export default Guests;

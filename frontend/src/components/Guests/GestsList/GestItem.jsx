import React from 'react';
import './GestItem.css';
//mediafile de momento - normalmente vendrá desde una API
import image from '../../../static/invitado1.jpg';

const GestItem = () => {
    return (
        <div className="GestItem mb-1 relative">
            <img src={image} alt="gest-img"/>
            <p>Rafael Bautista</p>
        </div>
    );
}

export default GestItem;

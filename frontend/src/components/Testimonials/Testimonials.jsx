import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="Testimonials section">
            <h2>Testimoniales</h2>
            <div className="container">
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
            </div>
        </section>
    );
}

export default Testimonials;

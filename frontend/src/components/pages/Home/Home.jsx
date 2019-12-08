import React from 'react';
import Header from '../../Header/Header';
import NavBar from '../../NavBar/NavBar';
import EDescription from '../../EDescription/EDescription';
import Program from '../../Program/Program';
import Guests from '../../Guests/Guests';
import Counter from '../../Counter/Counter';
import Prices from '../../Prices/Prices';
import Map from '../../Map/Map';
import Testimonials from '../../Testimonials/Testimonials';
import NewsLetter from '../../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Header/>
            <NavBar/>
            <EDescription/>
            <Program/>
            <Guests/>
            <Counter/>
            <Prices/>
            <Map/>
            <Testimonials/>
            <NewsLetter/>
        </div>
    );
}

export default Home;

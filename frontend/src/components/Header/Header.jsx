import React from 'react';
import SocialBar from '../SocialBar/SocialBar';
import './Header.css';
import EventInfo from './EventInfo';

const Header = () => {
    return (
        <header className="site_header">
            <div className="Hero relative">
                <div className="Hero_overlay"></div>
                <div className="header_content relative">
                    <SocialBar/>
                    <EventInfo/>
                </div>
            </div>
        </header>
    );
}

export default Header;

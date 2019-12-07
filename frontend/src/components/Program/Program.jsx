import React from 'react';
import videoBg from '../../static/bg-talleres.jpg';
import videoMp4 from '../../static/video.mp4';
import './Program.css';
import ProgramDetails from './ProgramDetails';

const Program = () => {
    return (
        <section className="Program relative section container">
            <div className="video-container">
                <video autoPlay loop poster={videoBg}>
                    <source src={videoMp4} type="video/mp4"/>
                </video>
            </div>
            <ProgramDetails/>
        </section>
    );
}

export default Program;

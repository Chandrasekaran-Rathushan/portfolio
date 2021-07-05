import './Home.css';
import logo  from '../../logo.svg';

import React from 'react'

const Home = () => {
    return (
        <div className='containerfluid'>

            {/* introction  section */}
            <div className="line intro">

            {/* profile image */}
                <div className='content-box profile-image'>
                    <img src={logo} alt="logo.svg"/>
                </div>

                {/* profile description */}
                <div className='content-box profile-text'>
                    <h2>Who am I ?</h2>
                    <h5>
                        I am Rathushan, second year undergraduate student, following BEng in Software
                        Engineering in Informatics Institute of Technology which is affiliated with the University of
                        Westminster, United Kingdom 
                    </h5>
                </div>
            </div>

            <div className="line description">
                <div className='content-box'>
                    <h2>What I do ?</h2>
                    <h5>
                        I am Rathushan, second year undergraduate student, following BEng in Software
                        Engineering in Informatics Institute of Technology which is affiliated with the University of
                        Westminster, United Kingdom 
                    </h5>
                </div>
            </div>

            <div className="line skill">
            <div className='content-box skill-text'>
                <h2>Skills</h2>
                <h5>
                    I am Rathushan, second year undergraduate student, following BEng in Software
                    Engineering in Informatics Institute of Technology which is affiliated with the University of
                    Westminster, United Kingdom.
                    I am Rathushan, second year undergraduate student, following BEng in Software
                    Engineering in Informatics Institute of Technology which is affiliated with the University of
                    Westminster, United Kingdom 
                    I am Rathushan, second year undergraduate student, following BEng in Software
                    Engineering in Informatics Institute of Technology which is affiliated with the University of
                    Westminster, United Kingdom 
                </h5>
            </div>
            <div className='content-box skill-list'>
                <h2>Tech Stacks</h2>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Django</li>
                    <li>SpringBoot</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Android</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Home;

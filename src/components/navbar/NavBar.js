import './NavBar.css';
import logo  from '../../logo.svg';
import NavLink from './NavLink';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
    const style = {
        width: 30,
        height: 30,
    }

    const handleNavButtonClick = () => {
        
        // let button = document.querySelector('.nav-button, .line1, line2, line3');
        let links = document.querySelector('.navbar-container');

        links.classList.toggle('display');
    }

    const handleNavLinkClick = () => {
        let links = document.querySelector('.navbar-container');

        links.classList.toggle('display');
    }

    return (
        <div className='nav-container'>
            <div className='section name-space'>
                <div className='logo'>
                    <img src={logo} alt="logo.svg"/>
                    <span>RATHUshan</span>
                 </div>
            </div>
                
                
            <div className='section navbar-container'>
                <ul className='navbar'onClick={() => {handleNavLinkClick()}}>
                    <li className='li'><NavLink className='link' to="/">Home</NavLink></li>
                    <li className='li'><NavLink className='link' to="/projects">Projects</NavLink></li>
                    <li className='li'><NavLink className='link' to='/contact'>Contact</NavLink></li>
                </ul>
            </div>


            <div className='section social-link-container'>
                <SocialIcon style={style} bgColor='white' fgColor='black' url='https://github.com/Chandrasekaran-Rathushan'/>
                <SocialIcon style={style} fgColor='white' url='https://www.linkedin.com/in/rathushan/'/>
                <SocialIcon style={style} fgColor='white' url='https://www.instagram.com/cr_rathushan/'/>
                <SocialIcon style={style} fgColor='white' url='https://www.facebook.com/rathushan8/'/>
            </div>

            <div className='nav-button' onClick={() => {handleNavButtonClick()}}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    )
}

export default NavBar;

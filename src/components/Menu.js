import React, { Fragment } from 'react';
import {onScrollIn, onScrollInMenu} from '../helper';

const Menu = ({position, categoryNav, color, zIndex}) => {

    if(window.location.pathname === '/menu'){
        onScrollInMenu();
    }else{
        onScrollIn();
    }

    const backgroundMenu = () => {
        const navbar = document.querySelector('.navbar');
        const element = document.querySelector('.navbar-toggler');
        const optionMenu = document.getElementsByClassName('nav-link');
        const iconbar = document.getElementsByClassName('icon-bar');
    
        if (element.classList.contains("collapsed")) {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.transition = 'all .5s';
            if(categoryNav === 'navbar-brand-menu'){
                document.querySelector('.navbar-brand-menu').removeAttribute('style');
                for (let j = 0; j < iconbar.length; j++) {
                    iconbar[j].removeAttribute('style');
                }
                for (let i = 0; i < optionMenu.length; i++) {
                    optionMenu[i].removeAttribute('style');
                }
            }
        }else{
            if(categoryNav === 'navbar-brand-menu'){
                document.querySelector('.navbar-brand-menu').setAttribute('style', 'color: #ffd600 !important');
                for (let j = 0; j < iconbar.length; j++){
                    iconbar[j].setAttribute('style', 'background-color: #ffd600 !important');
                }
                for (let i = 0; i < optionMenu.length; i++) {
                    optionMenu[i].setAttribute('style', 'color: #fff !important');
                }
                navbar.style.backgroundColor = '#000';
            }else{
                navbar.style.backgroundColor = 'white';
            }
        }
    }
    
    return ( 
        <Fragment>
            <nav id="menu-site" className={`${position} ${zIndex} navbar navbar-expand-lg navbar-light`}>
                <div className="container menu-foodies pt-3">
                    <a className={`DrukTextWideBold navbar-brand  pr-lg-5  pr-xl-5 ${categoryNav}`} href="/">Foodies</a>
                    <button onClick={ () => backgroundMenu()} className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>				
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav SyneBold ${color} menu-style`}>
                            <li className="nav-item pr-lg-3 pr-xl-3">
                                <a className={`nav-link ${color}`} href="/#about-us">Acerca de</a>
                            </li>
                            <li className="nav-item pr-lg-3 pr-xl-3">
                                <a className={`nav-link ${color}`} href="/#branches">Restaurantes</a>
                            </li>
                            <li className="nav-item pr-lg-3 pr-xl-3">
                                <a className={`nav-link ${color}`} href="/menu">Menú</a>
                            </li>
                            <li className="nav-item pr-lg-3 pr-xl-3">
                                <a className={`nav-link ${color}`} href="/#contact-us">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
 
export default Menu;
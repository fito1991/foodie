import React from 'react';
import gplay from '../images/gplay.png';
import app_store from '../images/app_store.png';

const Footer = () => {
    return ( 
        <div className="container">
            <div className="row m-0">
                <div className="col-12">
                    <footer>
                        <div className="row">
                            <div className="col-12 col-lg-7 col-md-12 col-sm-12 col-xl-7 text-center text-lg-left text-md-center text-sm-center text-xl-left">
                                <h3 className="DrukTextWideBold text-color-gray">Foodies</h3>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center text-sm-center text-md-center text-lg-right text-xl-right">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-sm-right">
                                        <a href="#!"><img src={app_store} alt="apple"/></a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-sm-left pt-2 pt-sm-0 pt-md-0 pt-lg-0 pt-xl-0">
                                        <a href="#!"><img src={gplay} alt="gplay"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 footer-menu">
                                <ul className="nav pt-3 pb-4">
                                    <li className="nav-item">
                                        <a className="nav-link text-color-gray" href="/#branches">Cónoce nuestras sucursales</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color-gray" href="/#about-us">Acerca de</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color-gray" href="#!">¿Qúe hablan de nosotros?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-color-gray" href="/#contact-us">Contáctanos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;
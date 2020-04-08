import React from 'react';
import phone_app from '../images/phone_app.png';
import phone_app_2 from '../images/phone_app_2.png';

const Download = () => {
    return ( 
        <div className="container">

            <div className="row m-0">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <img className="phone-img" src={phone_app} alt=""/>
                            <img className="phone-img phone-img-2" src={phone_app_2} alt=""/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="DrukTextWideBold text-center mt-0 mt-sm-0 mt-sm-0 mt-md-0 mt-lg-5 mt-xl-5 mb-5 wow animated zoomIn" data-wow-delay=".2s">Obtén más beneficios<br/> <span className="bg-text-app">Descarga nuestra App</span></h2>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                                        <div className="round">
                                            <p>01</p>
                                        </div>
                                        <p className="text-color-black title-step">Solicita rápido</p>
                                        <p className="text-color-black copy-step">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0">
                                        <div className="round">
                                            <p>02</p>
                                        </div>
                                        <p className="text-color-black title-step">Fácil de usar</p>
                                        <p className="text-color-black copy-step">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center mt-4">
                                        <div className="round">
                                            <p>03</p>
                                        </div>
                                        <p className="text-color-black title-step">Promociones especiales</p>
                                        <p className="text-color-black copy-step">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Download;
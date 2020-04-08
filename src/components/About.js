import React from 'react';

const About = () => {
    return ( 
        <div id="about-us" className="row m-0">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 bg-about">
                <h2 className="DrukTextWideBold text-uppercase text-white text-right pb-4 pr-3">la comida es<br/> <span className="text-color-yellow">nuestro arte</span></h2>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info-about">
                <h4 className="SyneBold title-about-us wow animated bounceIn" data-wow-delay=".4s">¿Quién es Foodies?</h4>
                <p className="text-about-us">
                    Elit irure ad nulla id elit laborum nostrud mollit irure. 
                    Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa 
                    fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa 
                    irure eiusmod minim occaecat et id minim ullamco.
                </p>
                <a className="SyneBold text-color-black anchor-contact-us" href="#contact-us">Contáctanos -></a>
            </div>
        </div>
    );
}
 
export default About;
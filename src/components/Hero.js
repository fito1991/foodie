import React, { Fragment } from 'react';

const Hero = ({imageHamburger, imageYellow, backgroundColor, bgYellow, titleOne, titleTwo, titleThree, subtitleOne, subtitleTwo}) => {
    
    const subtitleCopy = () => {
        return(
            <p className="lead subtitle-hero mb-5">{subtitleOne} <br/>{subtitleTwo}.</p>
        );
    }

    const linkFindUs = () => {
        return(
            <a className="SyneBold text-color-black find-us" href="#!">Ecuentranos -></a>
        );
    }

    return ( 
        <Fragment>
            <div className={`jumbotron jumbotron-fluid ` + backgroundColor}>
                <div className={subtitleOne !== '' ? 'container container-hero pt-5' : 'container container-hero pb-5 pb-lg-0 pb-xl-0'}>
                    <div className="row">
                        <img className={bgYellow} src={require(`../images/${imageYellow}`)} alt=""/>
                        <img className="hero-hamburger" src={require(`../images/${imageHamburger}`)} alt=""/>
                        <div className="col-12 wow animated bounceInUp">
                            <h1 className={subtitleOne !== '' ? 'display-4 DrukTextWideBold title-hero mt-5 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0' : 'display-4 DrukTextWideBold title-hero mt-3 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 text-white'}>{titleOne} <br/> {titleTwo}<br/> <span className={subtitleOne !== '' ? 'bg-text' : 'bg-text-menu text-color-black'}>{titleThree}</span></h1>
                            {subtitleOne !== '' ? (subtitleCopy()) : null }
                            {subtitleOne !== '' ? (linkFindUs()) : null}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Hero;
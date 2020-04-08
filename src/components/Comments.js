import React, {Fragment} from 'react';
import red_1 from '../images/red_1.svg';
import red_2 from '../images/red_2.svg';
import bg_ketchup from '../images/bg_ketchup.png';

const Comments = () => {
    return ( 
        <Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <img className="red-1" src={red_1} alt=""/>
                    <div className="carousel-item active">
                        <blockquote className="blockquote text-center">
                            <h3 className="d-block w-50 m-auto text-center DrukTextWideBold">"El mejor lugar para degustar en familia y amigos!"</h3>
                            <footer className="blockquote-footer">Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.</footer>
                        </blockquote>
                    </div>
                    <div className="carousel-item">
                        <blockquote className="blockquote text-center">
                            <h3 className="d-block w-50 m-auto text-center DrukTextWideBold">"El mejor lugar para degustar en familia y amigos!"</h3>
                            <footer className="blockquote-footer">Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.</footer>
                        </blockquote>
                    </div>
                    <div className="carousel-item">
                        <blockquote className="blockquote text-center">
                            <h3 className="d-block w-50 m-auto text-center DrukTextWideBold">"El mejor lugar para degustar en familia y amigos!"</h3>
                            <footer className="blockquote-footer">Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.</footer>
                        </blockquote>
                    </div>
                    <img className="red-2" src={red_2} alt=""/>
                    <img className="bg-ketchup" src={bg_ketchup} alt=""/>
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
            </div>   
        </Fragment>
    );
}
 
export default Comments;
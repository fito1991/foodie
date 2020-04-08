import React from 'react';

const Image = ({food}) => {

    // extraigo variables
    const {name, image, description, price, category} = food;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div className="card border-0 hvr-glow">
                <img src={image} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title SyneBold">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-12 col-lg-6 col-xl-6">
                            <p className="card-text pr-2 text-color-categories-card d-inline-block"><small>{category}</small></p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-12 col-lg-6 col-xl-6">
                            <a href="#!" className="btn btn-food text-price DrukTextWideBold">${price}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Image;
import React from 'react';

const Location = ({location, markerDraw}) => {

    // extraigo variables del arreglo location
    const {name, opening_time, closing_time, address, latitude, longitude, type} = location;

    return ( 
        <div className="mt-2">
            <a onClick={() => markerDraw(latitude, longitude)} href="#!" className="list-group-item list-group-item-action">
                <p>
                    <span className="text-color-black SyneBold">{name}</span><br/>
                    <span className="text-color-black">Abierto de {opening_time} a.m - {closing_time} p.m</span><br/>
                    <span className="text-color-black">{address}</span>
                </p>
            </a>
        </div>
    );
}
 
export default Location;
import React from 'react';
import ListLocations from './ListLocations';
import MapGoogle from './MapGoogle';
import NotFound from './NotFound';
import domicilio from '../images/domicilio.svg';
import llevar from '../images/llevar.svg';

const Locations = ({stateLocations, typeLocation, handleChange, stateTerm, markerDraw, stateCoord}) => {
    return ( 
        <div id="branches" className="row m-0 pt-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="DrukTextWideBold">Estamos para ti</h2>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 filter-to-go text-center pt-3 pb-3">
                        <button onClick={() => typeLocation('takeaway')} className="SyneBold text-white filter-locations bg-transparent border-0">
                            <img src={llevar} alt="para-llevar"></img>
                            <span className="pl-2">Para Llevar</span>
                        </button>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 filter-delivery text-center pt-3 pb-3 border-top">
                        <button onClick={() => typeLocation('delivery')} className="SyneBold text-color-black filter-locations bg-transparent border-0">
                        <img src={domicilio} alt="domicilio"></img>
                            <span className="pl-2">Domicilio</span>
                        </button>
                    </div>
                    <div className="border col-12">
                        <input 
                            className="form-control filter-input border-0" 
                            placeholder="Busca por nombre o dirección o da click en el listado" 
                            type="text" 
                            value={stateTerm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-12">
                        { (stateLocations.length !== 0) ? (
                            <ListLocations
                                stateLocations={stateLocations}
                                markerDraw={markerDraw}
                            />
                        ) : (
                            <NotFound />
                        ) }

                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 p-0">
                <MapGoogle 
                    stateCoord={stateCoord}
                />
            </div>
        </div>
    );
}
 
export default Locations;
import React from 'react';
import food_404 from '../images/food_404.png';
const Page404 = () => {
    return ( 
        <div className="container">
            <div className="row m-0 p-5">
                <div className="col-12 p-5 text-center">
                    <img src={food_404} alt="not-found"/>
                    <p className="SyneBold pt-2">¡Platillo no encontrado!</p>
                    <p className="text-colo-black">Te invitamos a que verifiques si el nombre esta bien escrito o<br/> prueba buscando un nuevo platillo</p>
                </div>
            </div>
        </div>
    );
}
 
export default Page404;
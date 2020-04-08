import React from 'react';
import not_found_search from '../images/not_found_search.png';

const NotFound = () => {
    return ( 
    <div className="contianer">
        <div className="row m-0">
            <div className="col-12 pt-5 text-center">
                <img src={not_found_search} alt="404"></img>
                <p className="SyneBold pt-2">¡No hemos encontrado lo que buscabas!</p>
            </div>
        </div>
    </div>
    );
}
 
export default NotFound;
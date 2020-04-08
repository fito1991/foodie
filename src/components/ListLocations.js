import React from 'react';
import Location from './Location'

const ListLocations = ({stateLocations, markerDraw}) => {
    return ( 
        <div className="list-group">
        {stateLocations.map(location => (
            <Location
                key={location.id}
                location={location}
                markerDraw={markerDraw}
            />
        ))}
        </div>
     );
}
 
export default ListLocations;
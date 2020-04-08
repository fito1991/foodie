import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';

const MapGoogle = ({stateCoord}) => {

    const uluru = stateCoord;

    const { ref, map, google } = useGoogleMaps(
        // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
        "AIzaSyCZanJwmim3u_FXxJFDytWJmIK9G32FvdQ",
        // NOTE: even if you change options later
        {
          center: uluru,
          zoom: 12
        }
    );

    if (map) {
        // execute when map object is ready
        new google.maps.Marker({ position: uluru, map });
    }

    return ( 
            <div ref={ref} className="w-100 h-100" />
    );
}
 
export default MapGoogle;
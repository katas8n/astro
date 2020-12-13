import React from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';

import './Map.scss';

const Map = ({ latitude, longitude }) => {
    const convertedPosition = {
        latitude: +latitude,
        longitude: +longitude
    };

    return (
        <ReactMapGl
            {...convertedPosition}
            zoom={4}
            mapboxApiAccessToken="pk.eyJ1Ijoia2lyczhuIiwiYSI6ImNraWtvMXQ1NDBicnoydW95N3pxdXJnY3EifQ.JrPoI3OJl8eSS09tz7KdqQ"
            width="1000px"
            height="600px"
            mapStyle="mapbox://styles/kirs8n/ckikom9oi10f617nrh553cj0a"
            className="map"
        >
            <Marker {...convertedPosition}>
                <div className="craft">Craft</div>
            </Marker>
        </ReactMapGl>
    );
};

export default Map;

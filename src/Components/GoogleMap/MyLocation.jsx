import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import useTitle from '../../Hooks/useTitle';

const containerStyle = {
    width: '45vw',
    height: '83vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyLocation() {
    useTitle('Google Map')
    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyLocation)
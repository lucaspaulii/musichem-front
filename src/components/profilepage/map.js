import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

export default function MapPlaces({ coordinates }) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY,
    libraries: ["places"],
    })
    if (!isLoaded) return <div>Loading...</div>
    return <Map coordinates={coordinates}/>
}

function Map({ coordinates }) {
    const center = useMemo(() => ({lat: coordinates[1], lng: coordinates[0]}), []);
    const containerStyle = {
        width: '100%',
        height: '150px',
      };

    return (
        <GoogleMap zoom={11} center={center} mapContainerStyle={containerStyle}> 
            <MarkerF position={center} />
        </GoogleMap>
    )
}

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function LocationMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 19);
    }
  }, [map, position]);

  return position ? (
    <Marker position={position}>
      <Popup>You are here.</Popup>
    </Marker>
  ) : null;
}

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let watchId;
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition([latitude, longitude]);
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <MapContainer center={[51.505, -0.09]} zoom={15} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <LocationMarker position={currentPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;

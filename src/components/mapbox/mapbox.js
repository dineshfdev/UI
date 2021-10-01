import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

import Pins from './pins';
import GarageInfo from './garageInfo';
import { getAllGaragesByLatAndLong } from '../../services/services';
import { usePosition } from '../../customHooks/usePosition';
import {
  CHENNAI_POSITION,
  MAPBOX_STYLE,
  MAPBOX_TOKEN,
} from '../../utils/constants';

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px',
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px',
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px',
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px',
};

export default function Mapbox() {
  const [viewport, setViewport] = useState({
    latitude: 13.0827,
    longitude: 80.2707,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  const { latitude, longitude } = usePosition();
  const [markerData, setMarkerData] = useState([]);

  const getPosition = useCallback(() => {
    if (latitude && longitude) {
      const getGarage = async () => {
        try {
          // Get the garages by current latitude and longitude
          const res = await getAllGaragesByLatAndLong(5, latitude, longitude);
          setMarkerData(res.data);

          // If the response is not empty, set the position to the Chennai position
          if (res.data.length === 0) {
            const res = await getAllGaragesByLatAndLong(
              5,
              CHENNAI_POSITION.LATITUDE,
              CHENNAI_POSITION.LONGITUDE
            );
            setMarkerData(res.data);
          }
        } catch (error) {
          console.error(error);
        }
      };
      getGarage();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    getPosition();
  }, [getPosition, latitude, longitude]);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={MAPBOX_STYLE}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Pins data={markerData} onClick={setPopupInfo} />

      {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={setPopupInfo}
        >
          <GarageInfo info={popupInfo} />
        </Popup>
      )}

      <GeolocateControl style={geolocateStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <NavigationControl style={navStyle} />
      <ScaleControl style={scaleControlStyle} />
    </MapGL>
  );
}

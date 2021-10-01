import * as React from 'react';
import { Marker } from 'react-map-gl';
import Vector from '../../images/service-geni-marker.png';

const SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
function Pins(props) {
  const { data = [], onClick } = props;
  console.log(`data`, data);
  if (data.length === 0) return null;
  return data.map((garage, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={garage.longitude}
      latitude={garage.latitude}
    >
      <img
        height={SIZE}
        src={Vector}
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
        }}
        onClick={() => onClick(garage)}
        alt="name"
      />
    </Marker>
  ));
}

export default React.memo(Pins);

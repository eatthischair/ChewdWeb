'use client';
import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';

export default function Maps() {
  //dallas
  const position = { lat: 32.7766642, lng: -96.7969879 };

  return (
    <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
      <AdvancedMarker position={position} />
    </Map>
  );
}

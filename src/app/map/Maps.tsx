'use client';
import { AdvancedMarker, Map, Marker } from '@vis.gl/react-google-maps';
import { reviews } from '../../json/reviews';

export default function Maps() {
  //dallas
  const position = { lat: 32.7766642, lng: -96.7969879 };

  const data = reviews.data;
  return (
    <div className="w-100 h-100 flex border-2 border-red-200">
      <main className="border w-100 h-100 justify-center">
        <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
          {Object.values(data).map((rev, index) => (
            <Marker position={rev.coords} key={index} />
          ))}
        </Map>
      </main>
    </div>
  );
}

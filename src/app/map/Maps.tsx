'use client';
import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { reviews } from '../../json/reviews';
import RenderMarkers from './RenderMarkers';
import { Review } from 'types';
export default function Maps() {
  const position = { lat: 32.7766642, lng: -96.7969879 };

  const data = Object.values(reviews.data) as Review[];
  console.log('data', data);

  return (
    <div className="w-100 h-100 flex border-2 border-red-200">
      <main className="border w-100 h-100 justify-center">
        <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
          <RenderMarkers data={data} />
        </Map>
      </main>
    </div>
  );
}

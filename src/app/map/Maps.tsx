'use client';
import { Map } from '@vis.gl/react-google-maps';
import { reviews } from '../../json/reviews';
import { yetToVisit } from '../../json/yetToVisit';
import RenderMarkers from './RenderMarkers';
import { Review, YetToVisit } from 'types';
export default function Maps() {
  const position = { lat: 32.7766642, lng: -96.7969879 };

  const revs = Object.values(reviews.data) as Review[];
  const yets = Object.values(yetToVisit.data) as YetToVisit[];
  return (
    <div className="w-100 h-100 flex border-2 border-red-200">
      <main className="border w-100 h-100 justify-center">
        <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
          <RenderMarkers revs={revs} yets={yets} />
        </Map>
      </main>
    </div>
  );
}

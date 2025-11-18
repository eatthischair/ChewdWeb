// import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Review, Reviews, YetToVisit, Yets } from 'types';
import { MarkerWithInfoWindow } from './MarkerWithInfoWindow';
// import { yetToVisit } from 'json/yetToVisit';
type Coords = { lat: number; lng: number };

export default function RenderMarkers({
  revs,
  yets,
}: {
  revs: Reviews;
  yets: Yets;
}) {
  const reviews = revs.map((rev: Review, index: number) => {
    if (!isCoords(rev.coords)) {
      return null;
    }
    return <MarkerWithInfoWindow position={rev.coords} key={index} rev={rev} />;
  });

  const yetToVisit = yets.map((yet: YetToVisit, index: number) => {
    if (!isCoords(yet.coords)) {
      return null;
    }
    return <MarkerWithInfoWindow position={yet.coords} key={index} yet={yet} />;
  });
  return reviews.concat(yetToVisit);
}

function isCoords(value: unknown): value is Coords {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as any).lat === 'number' &&
    typeof (value as any).lng === 'number'
  );
}

// import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Review, Reviews, YetToVisit, Yets } from 'types';
import { MarkerWithInfoWindow } from './MarkerWithInfoWindow';
// import { yetToVisit } from 'json/yetToVisit';
type Coords = { lat: number; lng: number };

export default function RenderMarkers({
  revs,
  yets,
  favs,
  toggle,
}: {
  revs: Reviews;
  yets: Yets;
  favs: any;
  toggle: any;
}) {
  console.log('eee', arguments);

  const reviews = revs.map((rev: Review) => {
    if (!isCoords(rev.coords) || !toggle.revs) {
      return null;
    }
    return (
      <MarkerWithInfoWindow
        position={rev.coords}
        key={rev.key}
        rev={rev}
        color={'red'}
      />
    );
  });

  const yetToVisit = yets.map((yet: YetToVisit) => {
    if (!isCoords(yet.coords) || !toggle.yets) {
      return null;
    }
    return (
      <MarkerWithInfoWindow
        position={yet.coords}
        key={yet.key}
        yet={yet}
        color={'blue'}
      />
    );
  });

  const favorites = favs.map((fav: Review) => {
    if (!isCoords(fav.coords) || !toggle.favs) {
      return null;
    }
    return (
      <MarkerWithInfoWindow
        position={fav.coords}
        key={fav.key}
        rev={fav}
        color={'black'}
      />
    );
  });

  let allMarkers = reviews.concat(yetToVisit, favorites);
  return allMarkers;
}

function isCoords(value: unknown): value is Coords {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as any).lat === 'number' &&
    typeof (value as any).lng === 'number'
  );
}

import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Review, Reviews } from 'types';
import { MarkerWithInfoWindow } from './MarkerWithInfoWindow';
type Coords = { lat: number; lng: number };

export default function RenderMarkers({ data }: { data: Reviews }) {
  // console.log('rendermarkers data', data);
  return data.map((rev: Review, index: number) => {
    if (!isCoords(rev.coords)) {
      return null;
    }
    return (
      // <AdvancedMarker position={rev.coords} key={index} title={rev.placeName} style={}/>
      <MarkerWithInfoWindow position={rev.coords} key={index} rev={rev} />
    );
  });
}

function isCoords(value: unknown): value is Coords {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as any).lat === 'number' &&
    typeof (value as any).lng === 'number'
  );
}

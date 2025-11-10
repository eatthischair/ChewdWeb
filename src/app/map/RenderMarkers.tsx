import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { Review } from 'types';
type Coords = { lat: number; lng: number };

export default function RenderMarkers({ data }: any) {
  console.log('rendermarkers data', data);
  return data.map((rev: Review, index: number) => {
    if (!isCoords(rev.coords)) {
      return null;
    }
    return <AdvancedMarker position={rev.coords} key={index} />;
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

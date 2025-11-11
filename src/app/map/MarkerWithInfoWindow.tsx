import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';
import { Coords, Review } from '../../types/index';
import { colorScale } from './constants';
import { DialogDemo } from './Dialog';
type Params = {
  position: Coords;
  rev: Review;
};
export const MarkerWithInfoWindow = ({ position, rev }: Params) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  const { label, value } = rev.ratings[0];
  const placeName = rev.placeName.split(',')[0];
  const color = colorScale[value];

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        <Pin />

        {infoWindowShown && (
          <InfoWindow
            headerDisabled={true}
            anchor={marker}
            onClose={handleClose}
            style={{ color: 'black' }}
          >
            <div className="relative ">
              <button
                onClick={handleClose}
                className="absolute right-0 top-0 -mt-4 text-gray-700
                   text-3xl leading-none"
              >
                ×
              </button>

              <h2 className="mt-2 border-b  pb-1 px-2 py-4 text-lg font-semibold">
                {placeName}
              </h2>
              <div className="pt-1 px-2 font-medium">
                {label}: {value}
              </div>
              <DialogDemo rev={rev} />
            </div>
          </InfoWindow>
        )}
      </AdvancedMarker>
    </>
  );
};

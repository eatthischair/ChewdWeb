import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';
import { Coords, Review, YetToVisit } from '../../types/index';
// import { colorScale } from './constants';
import { DialogDemo } from './Dialog/Dialog';
import { RevInfoWindow } from './ReviewInfoWindow';
import { YetInfoWindow, YetToVisitInfoWindow } from './YetInfoWindow';
type Params = {
  position: Coords;
  rev?: Review;
  yet?: YetToVisit;
};
export const MarkerWithInfoWindow = ({ position, rev, yet }: Params) => {
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

  let placeName;
  let bgColor;
  if (rev) {
    placeName = rev.placeName.split(',')[0];
    bgColor = 'red';
  } else if (yet) {
    placeName = yet.placeName;
    bgColor = 'orange';
  }
  // const color = colorScale[value];

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        <Pin background={bgColor} />

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
              {rev ? (
                <RevInfoWindow
                  label={rev.ratings[0].label}
                  placeName={placeName}
                  rating={rev.ratings[0].value}
                  rev={rev}
                />
              ) : (
                ''
              )}
              {yet ? <YetInfoWindow placeName={placeName} rev={rev} /> : ''}
            </div>
          </InfoWindow>
        )}
      </AdvancedMarker>
    </>
  );
};

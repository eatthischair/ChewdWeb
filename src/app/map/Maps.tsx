'use client';
import { Map } from '@vis.gl/react-google-maps';
import { reviews } from '../../json/reviews';
import { yetToVisit } from '../../json/yetToVisit';
import RenderMarkers from './RenderMarkers';
import { Reviews, Yets } from 'types';
import { YetsDialog } from './YetsDialog';
import { MarkerToggles } from './MarkerToggles';
import { useState } from 'react';
import { Input } from 'components/ui/input';
export default function Maps() {
  //Dallas, later add use your location
  const position = { lat: 32.7766642, lng: -96.7969879 };

  const revs: Reviews = Object.entries(reviews.data).map(([key, value]) => ({
    ...value,
    key,
  }));

  const yets: Yets = Object.entries(yetToVisit.data).map(([key, value]) => ({
    ...value,
    key,
  }));

  const favs = revs.filter((rev) => rev.favorite);
  const [toggle, setToggle] = useState({
    revs: true,
    yets: true,
    favs: true,
  });

  return (
    <div className="max-w-full h-full flex  m-4">
      <main className=" w-100 h-100 justify-center">
        <Input className="p-4 my-4" placeholder="Filter Markers" />
        <Map
          defaultCenter={position}
          defaultZoom={10}
          mapId="DEMO_MAP_ID"
          reuseMaps={true}
        >
          <RenderMarkers
            revs={revs.filter((rev) => !rev.favorite)}
            yets={yets}
            favs={favs}
            toggle={toggle}
          />
          <YetsDialog />
          <MarkerToggles setToggle={setToggle} />
        </Map>
      </main>
    </div>
  );
}

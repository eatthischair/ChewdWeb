import { Review, YetToVisit } from 'types';
import { DialogDemo } from './Dialog/Dialog';

type Params = {
  placeName: string;
};
export const YetInfoWindow = ({ placeName }: Params) => {
  return (
    <>
      <h2 className="mt-2  pb-1 px-2 py-4 text-lg font-semibold">
        {placeName}
      </h2>
    </>
  );
};

import { Review } from 'types';
import { DialogDemo } from './Dialog/Dialog';

type Params = {
  placeName: string;
  label: string;
  rating: number;
  rev: Review;
};
export const RevInfoWindow = ({ placeName, label, rating, rev }: Params) => {
  return (
    <>
      <h2 className="mt-2 border-b  pb-1 px-2 py-4 text-lg font-semibold">
        {placeName}
      </h2>
      <div className="pt-1 px-2 font-medium">
        {label}: {rating}
      </div>

      <DialogDemo rev={rev} />
    </>
  );
};

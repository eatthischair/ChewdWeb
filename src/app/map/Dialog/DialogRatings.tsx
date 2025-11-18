import { Slider } from 'components/ui/slider';
import { Review } from 'types';

export function DialogRatings({ rev }: { rev: Review }) {
  return rev.ratings.map((rating, index) => {
    const { label, value } = rating;
    return (
      <ul className="pt-1 px-2 p-4 font-bold" key={index}>
        {label}: {value}
        <Slider defaultValue={[value]} disabled max={5} />
      </ul>
    );
  });
}

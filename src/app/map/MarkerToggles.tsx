import { Button } from 'components/ui/button';
import { Toggle } from 'types';
type Params = {
  setToggle: React.Dispatch<React.SetStateAction<Toggle>>;
};
export const MarkerToggles = ({ setToggle }: Params) => {
  return (
    <div className="w-full flex justify-between ">
      <Button
        className="bg-[#D2DCB6]"
        onClick={() =>
          setToggle((toggle) => ({ ...toggle, yets: !toggle.yets }))
        }
      >
        {' '}
        Want to Go
      </Button>
      <Button
        className="bg-[#A1BC98]"
        onClick={() =>
          setToggle((toggle) => ({ ...toggle, revs: !toggle.revs }))
        }
      >
        Chew'd
      </Button>
      <Button
        className="bg-[#778873]"
        onClick={() =>
          setToggle((toggle) => ({ ...toggle, favs: !toggle.favs }))
        }
      >
        Favorites
      </Button>
    </div>
  );
};

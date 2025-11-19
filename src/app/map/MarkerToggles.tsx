import { Button } from 'components/ui/button';
import { Toggle } from 'types';
type Params = {
  setToggle: React.Dispatch<React.SetStateAction<Toggle>>;
};
export const MarkerToggles = ({ setToggle }: Params) => {
  return (
    <>
      <Button
        onClick={() =>
          setToggle((toggle) => ({ ...toggle, yets: !toggle.yets }))
        }
      >
        {' '}
        Want to Go
      </Button>
      <Button
        onClick={() =>
          setToggle((toggle) => ({ ...toggle, revs: !toggle.revs }))
        }
      >
        Chew'd
      </Button>
      <Button
        onClick={() =>
          setToggle((toggle) => ({ ...toggle, favs: !toggle.favs }))
        }
      >
        Favorites
      </Button>
    </>
  );
};

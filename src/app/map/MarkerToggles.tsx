import { Button } from 'components/ui/button';
export const MarkerToggles = ({ toggle, setToggle }) => {
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

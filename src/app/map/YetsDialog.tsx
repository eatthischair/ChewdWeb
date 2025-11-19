import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { fetchData } from 'data/fetchData';

export function YetsDialog() {
  const [input, setInput] = useState('');
  const [places, setPlaces] = useState<any>([]);
  const [placeName, setPlaceName] = useState(null);
  const [showPlaces, setShowPlaces] = useState(true);

  const debouncedSetInput = useMemo(
    () =>
      debounce((value: string) => {
        getData(value);
      }, 500),
    []
  );

  useEffect(() => {
    return () => debouncedSetInput.cancel();
  }, [debouncedSetInput]);

  const handleInput = async (value: string) => {
    setInput(value);
    debouncedSetInput(value);
  };

  const getData = async (value: string) => {
    const places = await fetchData(value);
    console.log('penis', places);
    setPlaces(places?.body.suggestions);
    console.log(places?.body.suggestions);
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add Want to Go</Button>
        </DialogTrigger>
        <DialogContent className="max-w-screen sm:max-w-[425px] border-8">
          <DialogHeader>
            <DialogTitle>Add Want to Go</DialogTitle>
            <DialogDescription>
              Add places you want to go to your map
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Restaurant Name</Label>
              <Input
                className=" p-4"
                onChange={(e) => handleInput(e.target.value)}
                value={input}
              />
            </div>
            <a className="flex flex-col justify-left items-start max-w-sm">
              {places && showPlaces
                ? places.map((place: any) => {
                    const placeName = place.placePrediction.text.text;
                    const [name, street] = placeName.split(',');
                    return (
                      <Button
                        className="p-4 m-2 hover:foreground bg-gray-900 flex-1 max-w-full whitespace-normal text-left"
                        onClick={() => {
                          setPlaceName(placeName);
                          setShowPlaces(false);
                        }}
                        key={placeName}
                      >
                        {name}, {street}
                      </Button>
                    );
                  })
                : ''}
            </a>
            <div className="p-4">
              {placeName}{' '}
              <a
                onClick={() => {
                  setPlaceName(null);
                  setShowPlaces(true);
                }}
              >
                {!showPlaces ? <div className="text-2xl">X</div> : ''}
              </a>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

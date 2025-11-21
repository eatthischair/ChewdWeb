'use client';
import { Input } from 'components/ui/input';
import { SliderDemo } from './SliderDemo';
import { ratings } from './constants';
import { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';
import fetch from 'next';
import { fetchData } from 'data/fetchData';
import { Button } from 'components/ui/button';
import { Textarea } from 'components/ui/textarea';

export default function Page() {
  const [input, setInput] = useState('');
  const [places, setPlaces] = useState([]);
  const [placeName, setPlaceName] = useState(null);
  const [showPlaces, setShowPlaces] = useState(true);
  const [comments, setComments] = useState('');

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
    setPlaces(places?.body.suggestions);
  };

  return (
    <div className="border-2 flex items-center justify-center">
      <main className="flex justify-center flex-col items-center max-w-[1200px] border">
        <a className="p-4"> write a review bitch </a>

        <Input
          className="max-w-md p-4"
          onChange={(e) => handleInput(e.target.value)}
          disabled={!showPlaces}
          value={input}
        />
        <a className="flex flex-col p-4">
          {places && showPlaces
            ? places.map((place: any) => {
                const placeName = place.placePrediction.text.text;
                const [name, street] = placeName.split(',');
                return (
                  <Button
                    className="p-4 m-1 hover:foreground bg-gray-900"
                    onClick={() => {
                      setPlaceName(placeName);
                      setShowPlaces(false);
                    }}
                    key={placeName}
                  >
                    {name},{street}
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
        <div className="flex flex-col justify-center px-4 py-8 pb-24 border">
          {ratings.map(({ label, icon }, idx) => {
            return (
              <SliderDemo label={label} key={label} icon={icon} idx={idx} />
            );
          })}
          <aside>
            Comments
            <Textarea
              placeholder="Type your message here."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}

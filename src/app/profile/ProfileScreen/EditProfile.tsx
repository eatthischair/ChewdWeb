import { useState, useMemo } from 'react';

const EditProfile = () => {
  //radio button values
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Public (Open Book, share my reviews with everyone)',
        value: 'Public (Open Book, share my reviews with everyone)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '2',
        label: 'Private (Invite Only, reviews and followers)',
        value: 'Private (Invite Only, reviews and followers)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
    ],
    []
  );

  const radioButtons2 = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label:
          'Highschool (limited experience/exposure or not too focused on it)',
        value:
          'Highschool (limited experience/exposure or not too focused on it)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '2',
        label:
          'Bachelors (experimented a little, developing taste buds for more adventures, basic ability to review, pretty opinionated, hard to be objective with food)',
        value:
          'Bachelors (experimented a little, developing taste buds for more adventures, basic ability to review, pretty opinionated, hard to be objective with food)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '3',
        label:
          'Masters (lived, loved, knows there is more to explore, can review giving details and specifics)',
        value:
          'Masters (lived, loved, knows there is more to explore, can review giving details and specifics)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
      {
        id: '4',
        label:
          'Doctorate (describe specific flavors or ingredients, reviews in detail, can also be truly objective in review, even give credit for flavors I don’t like but quality worth noting)',
        value:
          'Doctorate (describe specific flavors or ingredients, reviews in detail, can also be truly objective in review, even give credit for flavors I don’t like but quality worth noting)',
        labelStyle: styles.Text, // This sets the style for the label text
      },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState();
  const [selectedId1, setSelectedId1] = useState();

  //dropdown hooks
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '18-25', value: '18-25' },
    { label: '26-35', value: '26-35' },
    { label: '36-45', value: '36-45' },
    { label: '46-55', value: '46-55' },
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    { label: '$0 - $50,000', value: '0-50000' },
    { label: '$50,001 - $100,000', value: '50001-100000' },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Rarely', value: 'rarely' },
    { label: 'Occasionally', value: 'occasionally' },
    { label: 'Frequently', value: 'frequently' },
  ]);

  return <main>penis!!</main>;
};

export default EditProfile;

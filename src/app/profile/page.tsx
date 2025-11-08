import { AvatarDemo } from './Avatar';
import { users } from '../../json/usersChewdWeb';
import { DropdownMenuDemo } from './dropdown-example';
import { reviews } from '../../json/reviews';
import { yetToVisit } from '../../json/yetToVisit';

export default function Page() {
  const user = users.data.thejohnwoz;
  const revs = Object.values(reviews.data);
  const yets = Object.values(yetToVisit.data);
  const favorites = revs.filter((rev) => rev.favorite === true);
  return (
    <div className="border-2 min-w-screen ">
      <div className="min-w-screen">
        <AvatarDemo />
        <div className="p-4 justify-center flex">Username</div>
        <div className="p-4 justify-center flex">First name Last Name</div>
        <div className="border-2 flex flex-row grow justify-evenly p-4">
          <DropdownMenuDemo items={favorites} name={'Favorites'} />
          <DropdownMenuDemo items={revs} name={'Reviews'} />
          <DropdownMenuDemo items={yets} name={'Yet to Visit'} />
        </div>
      </div>
    </div>
  );
}

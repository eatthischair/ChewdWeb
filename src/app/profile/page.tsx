import { AvatarDemo } from './Avatar';
import { DropdownMenuDemo } from './dropdown-example';
import { users } from '../../json/usersChewdWeb';
import { reviews } from '../../json/reviews';
import { yetToVisit } from '../../json/yetToVisit';
import { Reviews, Yets, User } from 'types';
import { DropdownFollowers } from './DropdownFollowers';

export default function Page() {
  const user: User = users.data.thejohnwoz;
  const revs: Reviews = Object.values(reviews.data);
  const yets: Yets = Object.values(yetToVisit.data);
  const favorites = revs.filter((rev) => rev.favorite === true);

  return (
    <main className="border flex justify-center">
      <div className=" border-2 max-w-[1200px] p-4">
        <div className="max-w-[1200px]">
          <AvatarDemo />
          <div className="p-4 justify-center flex">@{user.username}</div>
          <div className="p-4 justify-center flex">
            {user.firstName} {user.lastName}
          </div>
          <div className="grid grid-rows-2 grid-cols-2 border p-2">
            <div className="">Followers</div>
            <div>Following</div>
            <div>
              <DropdownFollowers
                items={user.followers}
                name={user.followers.length}
              />
            </div>
            <div>
              {' '}
              <DropdownFollowers
                items={user.following}
                name={user.following.length}
              />
            </div>
          </div>
          <div className="border-2 flex flex-row grow justify-between p-8 m-4">
            <DropdownMenuDemo items={favorites} name={'Favorites'} />
            <DropdownMenuDemo items={revs} name={'Reviews'} />
            <DropdownMenuDemo items={yets} name={'Yet to Visit'} />
          </div>
        </div>
      </div>
    </main>
  );
}

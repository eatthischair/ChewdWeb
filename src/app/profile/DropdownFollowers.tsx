import { Button } from '../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuPortal,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import Link from 'next/link';

import { Reviews, Yets } from 'types';

type List = Reviews | Yets;
type DropdownParams = {
  items: List;
  name: string;
};

export function DropdownFollowers({ items, name }: DropdownParams) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <PeopleList items={items} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const PeopleList = ({ items }) => {
  return (
    <DropdownMenuGroup>
      {items.map((person, index) => {
        return (
          <DropdownMenuItem key={index}>
            {/* <Link > */}
            {person}
            {index} {/* </Link> */}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
};

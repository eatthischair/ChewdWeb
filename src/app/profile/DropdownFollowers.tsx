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

export function DropdownFollowers({ items, name }: any) {
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

const PeopleList = ({ items }: any) => {
  return (
    <DropdownMenuGroup>
      {items.map((person: string, index: number) => {
        return (
          <DropdownMenuItem key={index}>
            {/* <Link > */}
            {person}
            {/* </Link> */}
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
};

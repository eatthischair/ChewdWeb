import { Button } from '../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Reviews, Yets } from 'types';
import { DropdownReviews } from './DropdownReviews';

type List = Reviews | Yets;
type DropdownParams = {
  items: List;
  name: string;
};

export function DropdownMenuDemo({ items, name }: DropdownParams) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownReviews items={items} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

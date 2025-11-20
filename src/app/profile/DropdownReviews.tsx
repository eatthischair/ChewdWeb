import { Button } from '../../components/ui/button';
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';

import { Reviews, Yets } from 'types';
export const DropdownReviews = ({ items }) => {
  return (
    <DropdownMenuGroup>
      {items.map((review, index) => {
        return (
          <DropdownMenuItem key={index}>{review.placeName}</DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
};

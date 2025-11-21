import { Button } from '../../components/ui/button';
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from '../../components/ui/dropdown-menu';

import { Reviews, Yets, Review } from 'types';
export const DropdownReviews = ({ items }: any) => {
  return (
    <DropdownMenuGroup>
      {items.map((review: Review, index: number) => {
        return (
          <DropdownMenuItem key={index}>{review.placeName}</DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
};

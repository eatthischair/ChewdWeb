import { Button } from '../../../components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../components/ui/dialog';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { DialogRatings } from './DialogRatings';
import { DialogDishes } from './DialogDishes';

import { Review } from 'types';

export function DialogDemo({ rev }: { rev: Review }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Review</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[50%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Ratings</DialogTitle>
            <DialogDescription>
              <DialogRatings rev={rev} />
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {rev.dishes.length ? (
              <DialogHeader>
                <DialogTitle>Dishes</DialogTitle>
                <DialogDescription>
                  <DialogDishes rev={rev} />
                </DialogDescription>
              </DialogHeader>
            ) : (
              ''
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

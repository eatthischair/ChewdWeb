import { Review } from 'types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Slider } from 'components/ui/slider';
export function DialogDishes({ rev }: { rev: Review }) {
  if (!rev.dishes) return;

  const dishes = rev.dishes.map((dish, index) => {
    const { label, value } = dish.ratings;
    const itemNum: string = `item-${index}`;
    return (
      <AccordionItem value={itemNum} key={index}>
        <AccordionTrigger>{dish.name}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance font-semibold">
          <div>
            {label}:{'  '}
            {value}
          </div>
          <Slider defaultValue={[value]} disabled max={5} />
          {dish.comments ? (
            <div className="font-medium">{dish.comments}</div>
          ) : (
            ''
          )}
        </AccordionContent>
      </AccordionItem>
    );
  });
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {dishes}
    </Accordion>
  );
}

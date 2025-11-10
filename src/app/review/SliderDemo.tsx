'use client';
import { cn } from '../../lib/utils';
import { Slider } from 'components/ui/slider';
import { useState } from 'react';
import {
  Heart,
  Smile,
  TrendingUp,
  ThumbsUp,
  BadgeCheck,
  BadgeDollarSign,
  Music,
  Volume,
  Users,
  Sparkle,
} from 'lucide-react';

interface SliderProps extends React.ComponentProps<typeof Slider> {
  label: string;
  icon: string;
  idx: number;
}

export function SliderDemo({
  label,
  // icon,
  // idx,
  className,
  ...props
}: SliderProps) {
  // const icons = {
  //   Heart,
  //   Smile,
  //   TrendingUp,
  //   ThumbsUp,
  //   BadgeCheck,
  //   BadgeDollarSign,
  //   Music,
  //   Volume,
  //   Users,
  //   Sparkle,
  // };
  // const Icon = icons[icon];

  const [val, setVal] = useState([2.5]);

  return (
    <div className=" py-8 sm:px-12 md:px-120 flex flex-col justify-center">
      <li className="p-4 flex justify-between">
        <span>{label}</span>
        <span>{val}</span>
      </li>

      <Slider
        defaultValue={[2.5]}
        max={5}
        step={0.5}
        onValueChange={(e) => setVal(e)}
        className={cn(' border ', className)}
        {...props}
      />
    </div>
  );
}

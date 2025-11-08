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

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({
  label,
  icon,
  idx,
  className,
  ...props
}: SliderProps) {
  const icons = {
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
  };

  const [val, setVal] = useState(2.5);

  const Icon = icons[icon];

  return (
    <div className=" py-8 sm:px-12 md:px-120 flex flex-col justify-center">
      <div className="p-4 flex justify-between">
        {label}
        <Icon size={20} />
        {val}
      </div>

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

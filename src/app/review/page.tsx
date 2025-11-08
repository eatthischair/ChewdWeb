import { SliderDemo } from './SliderDemo';
import { ratings } from './constants';

export default function Page() {
  return (
    <div className="border min-w-screen">
      write a motherfucking review bitch
      <div className="flex flex-col justify-center px-24 py-8 pb-24">
        {ratings.map(({ label, icon }, idx) => {
          return <SliderDemo label={label} key={label} icon={icon} idx={idx} />;
        })}
      </div>
      {/* <SliderDemo /> */}
    </div>
  );
}

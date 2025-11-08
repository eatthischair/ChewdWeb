import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <div className="flex justify-center items-center min-w-screen h-20 border p-4">
      <span className=" text-2xl p-4">Chew'd</span>
      <ModeToggle />
    </div>
  );
}

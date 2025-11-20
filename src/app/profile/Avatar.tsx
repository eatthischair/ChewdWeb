import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';

export function AvatarDemo() {
  return (
    <div className=" border border-blue-100 flex justify-center items-center p-4">
      <Avatar className="border-3 w-36 h-36 flex justify-center">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className=" grow"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

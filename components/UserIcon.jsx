import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserIcon() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

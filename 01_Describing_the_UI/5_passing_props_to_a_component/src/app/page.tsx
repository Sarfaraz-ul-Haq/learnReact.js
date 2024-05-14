import Image from "next/image";
import avatar from "@/assets/avatar.jpg";

interface User {
  name: string;
  email: string;
  avatar: any;
}

function UserInfo({ name, email, avatar }: User) {
  return (
    <div className="flex flex-col gap-3">
      <h1>{name}</h1>
      <Image className="avatar" src={avatar} alt="" height={200} width={200} />
      <h1>{email}</h1>
    </div>
  );
}

export default function Home() {
  const user: User = {
    name: "Sarfaraz",
    email: "isarfaraz80@gmail.com",
    avatar: avatar,
  };

  return (
    <div className="p-10">
      <UserInfo {...user} />
    </div>
  );
}

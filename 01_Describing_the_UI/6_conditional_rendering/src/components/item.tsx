interface ItemProps {
  name: string;
  isPacked: boolean;
}

export default function Item({ name, isPacked }: ItemProps) {
  return (
    <li>
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}

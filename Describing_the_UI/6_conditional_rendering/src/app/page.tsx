import Item from "@/components/item";

// PackingList component that renders multiply Item component
function PackingList() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <h1 className="font-bold text-2xl">Fruits List</h1>
      <Item name="Guava" isPacked={true} />
      <Item name="Mango" isPacked={true} />
      <Item name="Strawberry" isPacked={false} />
      <Item name="Watermelon" isPacked={true} />
      <Item name="Grapes" isPacked={false} />
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <h1 className="font-bold text-4xl">Conditional Rendering</h1>

      <PackingList />
    </div>
  );
}

export default Home;

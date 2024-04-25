import Profile from "@/components/profile";
import Gallery from "@/components/gallery";
import Recap from "@/components/recap";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <h1>Profile Component</h1>
      <Profile />
      <h1>Gallery Component</h1>
      <Gallery />
      <h1>Recap Component</h1>
      <Recap />
    </div>
  );
}

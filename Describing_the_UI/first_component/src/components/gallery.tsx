import Profile from "./profile";

export default function Gallery() {
  return (
    <section className="flex gap-3">
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

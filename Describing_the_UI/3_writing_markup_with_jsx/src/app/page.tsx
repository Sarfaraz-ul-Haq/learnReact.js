import Image from "next/image";
import pic1 from "@/assets/pic1.webp";
import pic2 from "@/assets/pic2.webp";
import pic3 from "@/assets/pic3.webp";
import pic4 from "@/assets/pic4.webp";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <h1>Writing Markup with JSX</h1>
      <div>
        JSX is a syntax extension for JavaScript that lets you write HTML-like
        markup inside a JavaScript file. Although there are other ways to write
        components, <br /> most React developers prefer the conciseness of JSX,
        and most codebases use it.
      </div>

      <h1 className="mt-3">JSX: Putting markup into JavaScript</h1>
      <div>
        The Web has been built on HTML, CSS, and JavaScript. For many years, web
        developers kept content in HTML, design in CSS, and logic in JavaScript
        <br /> often in separate files! Content was marked up inside HTML while
        the page’s logic lived separately in JavaScript:
      </div>

      <div className="flex">
        <Image src={pic2} alt="" />
        <Image src={pic1} alt="" />
      </div>

      <div className="mt-3">
        But as the Web became more interactive, logic increasingly determined
        content. JavaScript was in charge of the HTML! <br /> This is why in
        React, rendering logic and markup live together in the same
        place—components.
      </div>

      <div className="flex gap-3">
        <Image src={pic3} alt="" />
        <Image src={pic4} alt="" />
      </div>
      <div className="flex">
        <h1 className="ml-20">Sidebar React component</h1>
        <h1 className="ml-40 px-10">Form React component</h1>
      </div>

      <div className="mt-5">
        Keeping a button’s rendering logic and markup together ensures that they
        stay in sync with each other on every edit. Conversely, details that are
        unrelated, <br /> such as the button’s markup and a sidebar’s markup,
        are isolated from each other, making it safer to change either of them
        on their own.
      </div>

      <div>
        Each React component is a JavaScript function that may contain some
        markup that React renders into the browser. React components use a
        syntax extension <br /> called JSX to represent that markup. JSX looks a
        lot like HTML, but it is a bit stricter and can display dynamic
        information. The best way to understand this is to <br /> convert some
        HTML markup to JSX markup.
      </div>
    </div>
  );
}

export default function Recap() {
  return (
    <div className="flex flex-col">
      <div className="mb-3">
        You’ve just gotten your first taste of React! Let’s recap some key
        points.
      </div>

      <div>
        React lets you create components, reusable UI elements for your app..
      </div>
      <div>In a React app, every piece of UI is a component</div>
      <div>React components are regular JavaScript functions except:</div>
      <div className="mt-3">
        1. Their names always begin with a capital letter.
      </div>
      <div>2. They return JSX markup.</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-3 p-10">
      <h1>Importing and Exporting Components</h1>
      <div>
        The magic of components lies in their reusability: you can create
        components that are composed of other components. <br /> But as you nest
        more and more components, it often makes sense to start splitting them
        into different files. <br /> This lets you keep your files easy to scan
        and reuse components in more places.
      </div>

      <h1 className="mt-4">Default vs named exports</h1>
      <div>
        There are two primary ways to export values with JavaScript: default
        exports and named exports. So far, our examples have only used default
        exports. <br /> But you can use one or both of them in the same file. A
        file can have no more than one default export, but it can have as many
        named exports as you like.
      </div>

      <div className="mt-3">
        <table className="table-auto border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Syntax</th>
              <th className="border border-black px-4 py-2">
                Export statement
              </th>
              <th className="border border-black px-4 py-2">
                Import statement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">Default</td>
              <td className="border border-black px-4 py-2">
                export default function Button() {}
              </td>
              <td className="border border-black px-4 py-2">
                import Button from './Button.js';
              </td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Named</td>
              <td className="border border-black px-4 py-2">
                export function Button() {}
              </td>
              <td className="border border-black px-4 py-2">
                {`import { Button } from './Button.js';`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        When you write a default import, you can put any name you want after
        import. For example, you could write import Banana from './Button.js'
        instead and <br /> it would still provide you with the same default
        export. In contrast, with named imports, the name has to match on both
        sides. That’s why they are called named imports!
      </div>

      <div className="mt-3">
        People often use default exports if the file exports only one component,
        and use named exports if it exports multiple components and values.
      </div>
    </div>
  );
}

//_________________________________________________

// if (isPacked) {
//   return <li>{name} ✔</li>;
// }
// return <li>{name}</li>;

//_________________________________________________

// if (isPacked) {
//   return null;
// }
// return <li>{name}</li>;

//_________________________________________________

// return (
//   <li>
//     {isPacked ? name + " ✔" : name}
//   </li>
// );

//_________________________________________________

// return <li>{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
//_________________________________________________

// return (
//   <li>
//     {name} {isPacked && '✔'}
//   </li>
// );

//_________________________________________________

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = name + " ✔";
//   }
//   return (
//     <li>
//       {itemContent}
//     </li>
//   );
// }

//_________________________________________________

function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✔"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}
//_________________________________________________

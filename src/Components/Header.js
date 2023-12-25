

// function Header() {
//     return(<div>Hello Guys</div>);
// }
// function Header2() {
//     return(<div>Hello Guys</div>);
// }
// function Main() {
//     return(<div>Main Guys</div>);
// }

// export default Main;

// // export default Header;
// export {Header,Header2};


// ------- using snippet(rfc/rfce(it wll show exports differrently),rafc(for arrow function),rcc(for class)) --------------

// ------------ rfc ------------

// import React from 'react'

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// ------------ rfce ------------

// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header;


// ------------ rafc ---------

// import React from 'react'
// import "./Header.css";

// export const Header4 = () => {
//     const headerStyle = {
//         border: "2px solid black",
//         padding: "4vmax",
//     };
//   return (
//     <nav style= {headerStyle}>Krishna</nav>
//  )
// }


import React from 'react'
export const Header4 = () => {
  return (
    <nav>Header</nav>
 )
}


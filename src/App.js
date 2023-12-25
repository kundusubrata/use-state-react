import './App.css';
import './Components/Header.css'
// import Hello from './Components/Header';
// import {Header,Header2} from './Components/Header';
// import Hello2 from './Components/Header';
import {Header4} from './Components/Header';
import { Home } from './Components/Home';

// ------------------- Using Properties ------------------------

// function Mycomponent(props){
//   return <p className={props.nameForClass}>{props.name}</p>
// }

// -------------------- Destructure method ---------------------

// function Mycomponent({nameForClass,name,income=150}){
//   return (
//     <>
//       <h2 className={nameForClass}>{name}: ${income}</h2>
//       <hr/>
//     </>
//   );
// }

// function App() {
//   return (
//         <div id='first' className='hero'>
//        Hello<Mycomponent name={"Gopal"}  nameForClass = "div1" income = {100}/> 
//        <Mycomponent name="Krishna" nameForClass = "div2" /> 
//        <Mycomponent name={"Gobordhan"} nameForClass = "div3" income = {300}/> 
//        Guys  
//     </div>
//     // <div></div>
//   );
// }


// ----------------------------- import component via another file -------------

// function App() {
//   return (
//     <div>Hello  
//       {/* <Hello/> */}
//       <Header/>
//       <Header2/>
//       <Hello2/>
//       Guys</div>
//         );
// }


// -------------------------- write js -----------------

// const a = 32;
// function App() {
//   const b = 54;
//   return (
//     <div>Hello  
//       {b}
//       {a}
//       Guys</div>
//         );
// }

// -------------- verification for rfc snippet working -------------

// function App() {
//   return (
//     <div>Hello  
//       <Header4/>
//       <Home/>
//       Guys</div>
//         );
// }


function App() {
  return (
    <div>
      <Header4/>
      <Home/>
      </div>
        );
}

export default App;

import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";

// function App() {
//   return (
//     <div>
//       <h1>Hello World !!! </h1>
//       <p>this is my first paragraph 1</p>
//     </div>
//   );
// }

const App = () => {

  return (
    <div>
      <h1>Hello World !!! </h1>
      <p>this is my first paragraph 1</p>

      <FuncComp name="Daniel" />

      <FuncComp name="Trajce" />

      <FuncComp name="Stefani" />

      <FuncComp name="Milan" />

      <ClassComp />

    </div>
  );
}

// const App = () => (
//     <div>
//       <h1>Hello World !!! </h1>
//       <p>this is my first paragraph 1</p>
//     </div>
//   )

export default App
import { Route, Routes } from "react-router-dom";
import { Nav, Weather } from "./components";

const App = () => {

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App
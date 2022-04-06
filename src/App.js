import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signIn" element={<Login />} />
        <Route path="/" exact element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

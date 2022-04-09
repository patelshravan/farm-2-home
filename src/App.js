import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import HomePageBuyer from "./Components/HomePageBuyer/HomePageBuyer";
import HomePageSeller from "./Components/HomePageSeller/HomePageSeller";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<Login />} />
        <Route path="/" exact element={<Signup />} />
        <Route path="/homeSeller" element={<HomePageSeller />} />
        <Route path="/homeBuyer" element={<HomePageBuyer />} />
      </Routes>
    </div>
  );
}

export default App;

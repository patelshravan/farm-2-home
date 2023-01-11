import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import HomePageBuyer from "./Components/HomePageBuyer/HomePageBuyer";
import HomePageSeller from "./Components/HomePageSeller/HomePageSeller";
import ProfileSeller from "./Components/ProfileSeller/ProfileSeller";
import ProfileBuyer from "./Components/ProfileBuyer/ProfileBuyer";
import AddItems from "./Components/AddItems/AddItems";
import ViewItems from "./Components/ViewItems/ViewItems";
import ViewOrders from "./Components/ViewOrders/ViewOrders";
import ViewItemsBuyer from "./Components/ViewItemsBuyer/ViewItemsBuyer";
import Cart from "./Components/Cart/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/homeSeller" element={<HomePageSeller />} />
        <Route path="/homeBuyer" element={<HomePageBuyer />} />
        <Route path="/profileBuyer" element={<ProfileBuyer />} />
        <Route path="/profileSeller" element={<ProfileSeller />} />
        <Route path="/addItems" element={<AddItems />} />
        <Route path="/viewItems" element={<ViewItems />} />
        <Route path="/viewOrders" element={<ViewOrders />} />
        <Route path="/viewItemsBuyer" element={<ViewItemsBuyer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

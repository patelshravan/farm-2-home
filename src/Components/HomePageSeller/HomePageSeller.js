import React from "react";
import { NavLink } from "react-router-dom";

import NavbarSeller from "../NavbarSeller/NavbarSeller";
import "./HomePageSeller.css";

const HomePageSeller = () => {
  return (
    <>
      <NavbarSeller />
      <div className="box">
        <div className="subBox">
          <NavLink className="firstNav" to="/addItems">
            ➕ Add Items
          </NavLink>
          <NavLink className="firstNav" to="/viewOrders">
            🔍 View Orders
          </NavLink>
          <NavLink className="firstNav" to="/viewItems">
            🕵 View Items
          </NavLink>
          <NavLink className="firstNav" to="/profileSeller">
            👦 Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePageSeller;

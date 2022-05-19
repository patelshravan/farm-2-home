import React from "react";
import { NavLink } from "react-router-dom";

import NavbarBuyer from "../NavbarBuyer/NavbarBuyer";
import "./HomePageBuyer.css";

const HomePageSeller = () => {
  return (
    <>
      <NavbarBuyer />
      <div className="box">
        <div className="subBox">
          <NavLink className="firstNav" to="/viewOrders">
            ➕ Orders
          </NavLink>
          <NavLink className="firstNav" to="/viewOrders">
            ➕ Orders
          </NavLink>
          <NavLink className="firstNav" to="/viewItems">
            🕵 View Items
          </NavLink>
          <NavLink className="firstNav" to="/profileBuyer">
            👦 Profile
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HomePageSeller;

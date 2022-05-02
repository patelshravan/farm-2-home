import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button/Button";

import { Card } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import "./HomePageSeller.css";

const HomePageSeller = () => {
  const navigate = useNavigate();
  const handleProfileButton = () => {
    navigate("/profileSeller");
  };
  const handleAddItemsButton = () => {
    navigate("/addItems");
  };
  const handleViewItemsButton = () => {
    navigate("/viewItems");
  };
  const handleViewOrdersButton = () => {
    navigate("/vieworders");
  };
  return (
    <React.Fragment>
      <div style={{ marginTop: "15px" }}>
        <Button
          onClick={handleProfileButton}
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <PermIdentityIcon />
          Profile
        </Button>
        <Button
          onClick={handleViewItemsButton}
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          View Items
        </Button>
      </div>
      <Card
        sx={{
          bgcolor: "gray",
          boxShadow: 2,
          borderRadius: 2,
          p: 3,
          mt: 15,
          ml: 38,
          width: "50%",
        }}
      >
        <div>
          <Button
            onClick={handleAddItemsButton}
            buttonStyle="btn--success--outline"
          >
            Add Items
          </Button>

          <Button
            buttonStyle="btn--success--outline"
            onClick={handleViewOrdersButton}
          >
            View Orders
          </Button>
        </div>

        <div>
          <Button
            onClick={handleViewItemsButton}
            buttonStyle="btn--success--outline"
          >
            View Items
          </Button>

          <Button
            onClick={handleProfileButton}
            buttonStyle="btn--success--outline"
          >
            Profile
          </Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default HomePageSeller;

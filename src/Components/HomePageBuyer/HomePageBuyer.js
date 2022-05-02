import React from "react";
import { useNavigate } from "react-router-dom";

import { Card } from "@mui/material";

import { Button } from "../Button/Button";

const HomePageBuyer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profileBuyer");
  };
  const handleViewItems = () => {
    navigate("/viewItemsBuyer");
  };
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <React.Fragment>
      <div style={{ marginTop: "15px" }}>
        <Button
          onClick={handleClick}
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Profile
        </Button>
        <Button
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={goToCart}
        >
          Cart
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
          <Button buttonStyle="btn--success--outline">Orders</Button>
          <Button buttonStyle="btn--success--outline">Profile</Button>
          <Button buttonStyle="btn--success--outline" onClick={handleViewItems}>
            View Items
          </Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default HomePageBuyer;

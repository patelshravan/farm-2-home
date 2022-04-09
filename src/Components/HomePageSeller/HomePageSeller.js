import React from "react";

import { Card, Button } from "@mui/material";

import "./HomePageSeller.css";

const HomePageSeller = () => {
  return (
    <React.Fragment>
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
          <Button variant="contained">Add Items</Button>

          <Button variant="contained">View Orders</Button>
        </div>

        <div>
          <Button variant="contained">View Items</Button>

          <Button variant="contained">Profile</Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default HomePageSeller;

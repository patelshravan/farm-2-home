import React from "react";
import { Card, Typography } from "@mui/material";
import { Button } from "../Button/Button";

const HomePageBuyer = () => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "15px" }}>
        <Button
          onClick={() => {
            console.log("CLicked!");
          }}
          type="button"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Profile
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
          <Button variant="contained">Orders</Button>
        </div>

        <div>
          <Button variant="contained">Profile</Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default HomePageBuyer;

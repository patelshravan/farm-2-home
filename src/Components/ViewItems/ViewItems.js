import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Typography } from "@mui/material";
import ViewCozyIcon from "@mui/icons-material/ViewCozy";
import { Button } from "../Button/Button";

const ViewItems = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/viewOrders");
  };
  const goBack = () => {
    navigate("/homeSeller");
  };
  return (
    <React.Fragment>
      <br />
      <Button buttonStyle="btn--success--outline" onClick={goBack}>
        ← Go Back
      </Button>
      <Typography align="center" variant="h4" sx={{ mt: 3 }}>
        VIEW ITEMS
        <ViewCozyIcon />
      </Typography>
      <div>
        <Card
          sx={{
            bgcolor: "#C2E79E",
            boxShadow: 2,
            borderRadius: 2,
            p: 3,
            mt: 8,
            ml: 55,
            width: "30%",
          }}
        >
          <form>
            <p>
              <b>Name:</b> Bottle Guard(Lauki)
            </p>
            <p>
              <b>Price per/kg:</b> 40 ₹
            </p>
            <p>
              <b>Total Quantity to Sell:</b> 10Kg
            </p>
            <p>
              <b>Minimum Sell Quantity:</b> 2Kg
            </p>
            <p>
              <b>Description:</b> Include lauki in your diet to replenish the
              body with essential nutrients and fibres without popping pills.
            </p>
          </form>
          <br />
        </Card>
      </div>
      <div>
        <Card
          sx={{
            bgcolor: "#C2E79E",
            boxShadow: 2,
            borderRadius: 2,
            p: 3,
            mt: 8,
            ml: 55,
            width: "30%",
          }}
        >
          <form>
            <p>
              <b>Name:</b> Tomato
            </p>
            <p>
              <b>Price per/kg:</b> 60 ₹
            </p>
            <p>
              <b>Total Quantity to Sell:</b> 5Kg
            </p>
            <p>
              <b>Minimum Sell Quantity:</b> 2Kg
            </p>
            <p>
              <b>Description:</b> Tomatoes are juicy and sweet, full of
              antioxidants, and may help fight several diseases.
            </p>
          </form>
          <br />
        </Card>
      </div>
      <div>
        <Card
          sx={{
            bgcolor: "#C2E79E",
            boxShadow: 2,
            borderRadius: 2,
            p: 3,
            mt: 8,
            ml: 55,
            width: "30%",
          }}
        >
          <form>
            <p>
              <b>Name:</b> Carrot
            </p>
            <p>
              <b>Price per/kg:</b> 50 ₹
            </p>
            <p>
              <b>Total Quantity to Sell:</b> 12Kg
            </p>
            <p>
              <b>Minimum Sell Quantity:</b> 2Kg
            </p>
            <p>
              <b>Description:</b> The fiber in carrots can help keep blood sugar
              levels under control. And they're loaded with vitamin A and
              beta-carotene.
            </p>
          </form>
          <br />
        </Card>
      </div>
      <div>
        <Card
          sx={{
            bgcolor: "#C2E79E",
            boxShadow: 2,
            borderRadius: 2,
            p: 3,
            mt: 8,
            ml: 55,
            width: "30%",
          }}
        >
          <form>
            <p>
              <b>Name:</b> Cabbage
            </p>
            <p>
              <b>Price per/kg:</b> 40 ₹
            </p>
            <p>
              <b>Total Quantity to Sell:</b> 8Kg
            </p>
            <p>
              <b>Minimum Sell Quantity:</b> 2Kg
            </p>
            <p>
              <b>Description:</b> Cabbage contains phytonutrients that act as
              antioxidants to reduce your risk of certain cancers.
            </p>
          </form>
          <br />
        </Card>
      </div>
      <div>
        <Card
          sx={{
            bgcolor: "#C2E79E",
            boxShadow: 2,
            borderRadius: 2,
            p: 3,
            mt: 8,
            ml: 55,
            width: "30%",
          }}
        >
          <form>
            <p>
              <b>Name:</b> Raddish(Mooli)
            </p>
            <p>
              <b>Price per/kg:</b> 50 ₹
            </p>
            <p>
              <b>Total Quantity to Sell:</b> 15Kg
            </p>
            <p>
              <b>Minimum Sell Quantity:</b> 2Kg
            </p>
            <p>
              <b>Description:</b> Mooli (Radish) leaves are rich in vitamin C,
              vitamin B6, magnesium, phosphorus, iron and calcium. They helps in
              bone building as it is a good source of calcium.
            </p>
          </form>
          <br />
        </Card>
      </div>
      <br />
      <Button onClick={handleSubmit} buttonStyle="btn--success--outline">
        Submit
      </Button>
    </React.Fragment>
  );
};

export default ViewItems;

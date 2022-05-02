import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Button } from "../Button/Button";

const AddItems = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/viewItems");
  };

  return (
    <React.Fragment>
      <Typography align="center" variant="h4" sx={{ mt: 3 }}>
        ADD ITEMS
        <AddCircleIcon fontSize="medium" />
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
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              Price per/kg:
              <input type="number" name="price" />
            </label>
            <br />
            <label>
              Total Quantity to Sell:
              <input type="number" name="totQty" />
            </label>
            <br />
            <label>
              Minimum Sell Quantity:
              <input type="number" name="minQty" />
            </label>
            <br />
            <label>
              Description:
              <input type="textarea" name="description" />
            </label>
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

export default AddItems;

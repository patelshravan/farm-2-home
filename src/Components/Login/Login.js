import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Typography, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const data = {
  'buyerEmail': 'buyer@gmail.com', 'buyerPassword': 'buyer',
  'sellerEmail': 'seller@gmail.com', 'sellerPassword': 'seller'
}

const Login = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const [userType, setUserType] = useState("buyer");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const backtoLogin = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (userType === "buyer") {
      if (user.email === data['buyerEmail'] && user.password === data['buyerPassword']){
        navigate("/homeBuyer");
      } else {
        alert('Invalid Buyer Credentials')
      }
    } else if(userType === "seller") {
      if (user.email === data['sellerEmail'] && user.password === data['sellerPassword']){
        navigate("/homeSeller");
      } else {
        alert('Invalid Seller Credentials')
      }
    }
    else {
      // <Typography>Please Select an option above!</Typography>
      console.log("Please Select an option above!")
    }
  };

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
        <form>
          <Typography sx={{ mb: 2 }} variant="h4">
            Login
          </Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event) => setUserType(event.target.value)}
              value={userType}
            >
              <FormControlLabel
                value="buyer"
                control={<Radio />}
                label="Login as Buyer"
              />

              <FormControlLabel
                value="seller"
                control={<Radio />}
                label="Login as Seller"
              />
            </RadioGroup>
          </FormControl>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-mail Address
            </label>

            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter Your Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel">Password</label>

            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter Your Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </form>
        <Button onClick={handleSubmit} variant="contained">
          Login
        </Button>
        <Typography align="center" sx={{ mt: 2, fontWeight: "bold" }}>
          OR
        </Typography>
        <Typography align="center">Already have an account?</Typography>
        <Button onClick={backtoLogin} variant="contained">
          Sign Up
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Login;

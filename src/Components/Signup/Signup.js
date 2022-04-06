import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Typography, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    farmName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    location: "",
    city: "",
    pin: "",
  });

  const [userType, setUserType] = useState("buyer");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const backtoLogin = () => {
    navigate("/signin");
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
            Sign Up
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
                value="loginAsSeller"
                control={<Radio />}
                label="Sign Up as a Seller"
              />

              <FormControlLabel
                value="loginAsBuyer"
                control={<Radio />}
                label="Sign Up as a Buyer"
              />
            </RadioGroup>
          </FormControl>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          {userType === "seller" && (
            <div className="formField">
              <label className="formFieldLabel" htmlFor="farmName">
                Farm Name
              </label>

              <input
                type="text"
                id="farmName"
                className="formFieldInput"
                placeholder="Enter Your Name"
                name="farmName"
                value={user.farmName}
                onChange={handleChange}
              />
            </div>
          )}
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
            <label className="formFieldLabel" htmlFor="mobile">
              Mobile
            </label>

            <input
              type="tel"
              id="mobile"
              className="formFieldInput"
              placeholder="Enter Your Mobile"
              name="mobile"
              value={user.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>

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
          <div className="formField">
            <label className="formFieldLabel" htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              className="formFieldInput"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="location">
              Location
            </label>

            <input
              type="text"
              id="location"
              className="formFieldInput"
              placeholder="Enter Your Location"
              name="location"
              value={user.location}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="city">
              City
            </label>

            <input
              type="text"
              id="city"
              className="formFieldInput"
              placeholder="Enter Your City"
              name="city"
              value={user.city}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="pin">
              Pin
            </label>

            <input
              type="number"
              id="pin"
              className="formFieldInput"
              placeholder="Enter Your City Pin"
              name="pin"
              value={user.pin}
              onChange={handleChange}
            />
          </div>
        </form>
        <Button variant="contained">Sign Up</Button>
        <Typography align="center" sx={{ mt: 2, fontWeight: "bold" }}>
          OR
        </Typography>
        <Typography align="center">Already have an account?</Typography>
        <Button onClick={backtoLogin} variant="contained">
          Login
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Signup;

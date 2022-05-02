import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import logo from "../../assets/logo2.png";

import "./Signup.css";

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
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={logo} className="Sprofile" alt="logo" />
            </div>
          </div>
          <div>
            <h1 className="container">Sign Up</h1>
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
                  label="Sign Up as a Buyer"
                />

                <FormControlLabel
                  value="seller"
                  control={<Radio />}
                  label="Sign Up as a Seller"
                />
              </RadioGroup>
            </FormControl>
            <div className="second-input">
              <input
                type="text"
                id="name"
                className="field"
                placeholder="Enter Your Name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            {userType === "seller" && (
              <div className="second-input">
                <input
                  type="text"
                  id="farmName"
                  className="field"
                  placeholder="Enter Your Farm Name"
                  name="farmName"
                  value={user.farmName}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="second-input">
              <input
                type="email"
                id="email"
                className="field"
                placeholder="Enter Your Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <input
                type="tel"
                id="mobile"
                className="field"
                placeholder="Enter Your Mobile"
                name="mobile"
                value={user.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <input
                type="password"
                id="password"
                className="field"
                placeholder="Enter Your Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <input
                type="password"
                id="confirmPassword"
                className="field"
                placeholder="Confirm Your Password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <input
                type="text"
                id="location"
                className="field"
                placeholder="Enter Your Location"
                name="location"
                value={user.location}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <input
                type="text"
                id="city"
                className="field"
                placeholder="Enter Your City"
                name="city"
                value={user.city}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <input
                type="number"
                id="pin"
                className="field"
                placeholder="Enter Your City Pin"
                name="pin"
                value={user.pin}
                onChange={handleChange}
              />
            </div>
            <div className="second-input">
              <Button onClick={handleChange} variant="contained">
                Signup
              </Button>
            </div>
            <Typography align="center" sx={{ mt: 2, fontWeight: "bold" }}>
              OR
            </Typography>
            <Typography align="center">Already have an account?</Typography>
            <div className="lastButton">
              <Button onClick={backtoLogin} variant="contained">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import logo from "../../assets/logo1.png";

import "./Login.css";

const data = {
  buyerEmail: "buyer@gmail.com",
  buyerPassword: "buyer",
  sellerEmail: "seller@gmail.com",
  sellerPassword: "seller",
};

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
      if (
        user.email === data["buyerEmail"] &&
        user.password === data["buyerPassword"]
      ) {
        navigate("/homeBuyer");
      } else {
        alert("Invalid Buyer Credentials");
      }
    } else if (userType === "seller") {
      if (
        user.email === data["sellerEmail"] &&
        user.password === data["sellerPassword"]
      ) {
        navigate("/homeSeller");
      } else {
        alert("Invalid Seller Credentials");
      }
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div>
            <h1 className="container">Login</h1>
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
              <Button onClick={handleSubmit} variant="contained">
                Login
              </Button>
            </div>
            <Typography align="center" sx={{ mt: 2, fontWeight: "bold" }}>
              OR
            </Typography>
            <Typography align="center">Already have an account?</Typography>
            <div className="second-input">
              <Button onClick={backtoLogin} variant="contained">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

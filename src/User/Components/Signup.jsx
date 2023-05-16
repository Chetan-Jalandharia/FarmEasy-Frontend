import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserApis from "../../api/UserApis";
import { Box } from "@mui/material";
import { Alert, Toast } from "../../Common/Alert";
import NavBar from "./NavBar";

export default function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    district: "",
    image: "",
  });
  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      phone: "",
      street: "",
      landmark: "",
      city: "",
      state: "",
      pincode: "",
      district: "",
    });
    document.getElementById("image").value = "";
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleImg = (e) => {
    setUser({
      ...user,
      image: e.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      image,
      name,
      email,
      password,
      phone,
      street,
      landmark,
      pincode,
      district,
      city,
      state,
    } = user;
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("phone", phone);
    formdata.append("street", street);
    formdata.append("landmark", landmark);
    formdata.append("pincode", pincode);
    formdata.append("district", district);
    formdata.append("city", city);
    formdata.append("state", state);

    UserApis.userSignup(formdata)
      .then((val) => {
        if (val.status === 200) {
          resetForm();
          Alert.fire({
            icon: "success",
            title: "Verify Your Email to Login",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        if (err?.response?.status === 403) {
          Alert.fire({
            icon: "error",
            title: err?.response?.data?.message,
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Invalid Credential",
          });
        }
      });
  };
  return (
    <div>
      <NavBar />
      <div className="signupBox">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            required
            onChange={handleInput}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            required
            onChange={handleInput}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            required
            onChange={handleInput}
          />

          <label htmlFor="phone">Phone No:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={user.phone}
            required
            onChange={handleInput}
          />

          <label htmlFor="image">Profile Picture:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImg}
            required
          />

          <h5>Address InhtmlFormation:</h5>

          <label htmlFor="street">Street/Area:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={user.street}
            required
            onChange={handleInput}
          />

          <label htmlFor="landmark">LandMark:</label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={user.landmark}
            onChange={handleInput}
          />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "49%",
              }}
            >
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                className="smFeild"
                value={user.city}
                required
                onChange={handleInput}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "49%",
              }}
            >
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                className="smFeild"
                value={user.state}
                required
                onChange={handleInput}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "49%",
              }}
            >
              <label htmlFor="pincode">PinCode:</label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                className="smFeild"
                value={user.pincode}
                required
                onChange={handleInput}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "49%",
              }}
            >
              <label htmlFor="district">District:</label>
              <input
                type="text"
                id="district"
                name="district"
                className="smFeild"
                value={user.district}
                required
                onChange={handleInput}
              />
            </Box>
          </Box>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

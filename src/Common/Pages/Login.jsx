import React, { useState, useContext, lazy } from "react";
import { useNavigate } from "react-router-dom";
// const NavBar = lazy(() => import("../../User/Components/NavBar"));
import AdminApis from "../../api/AdminApis";
import { RefreshContext } from "../Context/RefreshData";
import jwt from "jwt-decode";
import NavBar from "../../User/Components/NavBar";
import { Alert, Toast } from "../Alert";

export default function Login() {
  const navigate = useNavigate();
  const { setnotAdmin } = useContext(RefreshContext);
  const { setisCustomer } = useContext(RefreshContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    AdminApis.userLogin(email, password)
      .then((val) => {
        console.log(val);
        if (val.status === 200) {
          Toast.fire({
            icon: "success",
            title: "Login successfully",
          });
          const tokenData = jwt(val.data.token);
          sessionStorage.setItem("auth", val.data.token);
          sessionStorage.setItem("tokenData", JSON.stringify(tokenData));
          console.log(sessionStorage.getItem("tokenData"));
          console.log("session set");
          if (val.data.data.isAdmin) {
            setnotAdmin(false);
            navigate("/admin");
          } else {
            setisCustomer(true);
            navigate("/");
          }
        }
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          Alert.fire({
            icon: "question",
            title: err?.response?.data?.message,
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Invalid Credential",
          });
        }
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid " style={{ height: "100vh" }}>
        <div className="signupBox ">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

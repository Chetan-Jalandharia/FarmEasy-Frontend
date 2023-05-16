import React, { lazy, useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
const NavBar = lazy(() => import("./Components/NavBarAdmin"));
const SideBar = lazy(() => import("./Components/SideBar"));
import MultiDelete from "./Context/DeleteContext";
import { RefreshContext } from "../Common/Context/RefreshData";

export default function Main() {
  const { notAdmin } = useContext(RefreshContext);
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    
    if (notAdmin) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <MultiDelete>
        <div className="container-fluid">
          <div className="row ">
            <div
              className={parseInt(window.innerWidth) >= 1000 ? "col-2" : ""}
              id="sidebar"
              style={{
                background: "#060606",
                height:
                  parseInt(window.innerWidth) >= 1000 ? "100vh" : "fit-content",
                overflowY: "scroll",
                overflowX: "hidden",
              }}
            >
              <SideBar />
            </div>
            <div
              className="col"
              id="mainbar"
              style={{
                height: "99vh",
                overflowY: parseInt(window.innerWidth) >= 1000 ? "scroll" : "",
              }}
            >
              <NavBar />
              <Outlet />
            </div>
          </div>
        </div>
      </MultiDelete>
    </>
  );
}

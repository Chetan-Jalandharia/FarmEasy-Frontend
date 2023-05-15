import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <>
      <div
        className="d-flex flex-column  text-white sidebar"
        style={{ width: "100%", height: "100%", background: "#060606" }}
      >
        <div className="d-flex justify-content-center">
          <NavLink
            to={"/admin"}
            className=" pt-2 text-white text-decoration-none"
          >
            <i className="fa-solid fa-tractor fa-2xl"></i>
            <span className="fs-3 ps-4">
              <b>FarmEasy</b>
            </span>
          </NavLink>
        </div>
        <hr />

        <ul className="nav nav-pills d-flex gap-3 flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#pc-list"
              className="btn d-flex justify-content-start gap-3 text-white d-flex"
              aria-current="page"
              data-bs-toggle="collapse"
              style={{ background: "#0abf53" }}
            >
              <div>
                <i className="fa-solid fa-tractor fa-lg"></i>
              </div>
              <div>
                <span className="">Product Category</span>
              </div>
            </a>
            <ul className="list-group collapse " id="pc-list">
              <Link
                to={"/admin/addproductcategory"}
                className="text-decoration-none list-group-item"
              >
                Add Category
              </Link>
              <Link
                to={"/admin/showproductcategories"}
                className="text-decoration-none list-group-item"
              >
                Show Categories
              </Link>
            </ul>
          </li>

          <li className="nav-item">
            <a
              href="#p-list"
              className="btn d-flex justify-content-start gap-3 text-white d-flex"
              aria-current="page"
              data-bs-toggle="collapse"
              style={{ background: "#0abf53" }}
            >
              <div>
                <i className="fa-solid fa-tractor fa-lg"></i>
              </div>
              <div>
                <span className="">Product </span>
              </div>
            </a>
            <ul className="list-group collapse" id="p-list">
              <Link
                to={"/admin/addproduct"}
                className="text-decoration-none list-group-item "
              >
                Add Product
              </Link>
              <Link
                to={"/admin/showallproducts"}
                className="text-decoration-none list-group-item"
              >
                Show Products
              </Link>
            </ul>
          </li>

          <li className="nav-item">
            <a
              href="#cc-list"
              className="btn d-flex justify-content-start gap-3 text-white d-flex"
              aria-current="page"
              data-bs-toggle="collapse"
              style={{ background: "#0abf53" }}
            >
              <div>
                <i className="fa-solid fa-wheat-awn fa-lg"></i>
              </div>
              <div>
                <span className="">Commodity Category</span>
              </div>
            </a>
            <ul className="list-group collapse" id="cc-list">
              <Link
                to={"/admin/addcommoditycategory"}
                className="text-decoration-none list-group-item"
              >
                Add commodity Category
              </Link>
              <Link
                to={"/admin/showcommoditycategories"}
                className="text-decoration-none list-group-item"
              >
                Show commodity Categories
              </Link>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="#c-list"
              className="btn d-flex justify-content-start gap-3 text-white d-flex"
              aria-current="page"
              data-bs-toggle="collapse"
              style={{ background: "#0abf53" }}
            >
              <div>
                <i className="fa-solid fa-wheat-awn fa-lg"></i>
              </div>
              <div>
                <span className="">Commodity</span>
              </div>
            </a>
            <ul className="list-group collapse" id="c-list">
              <Link
                to={"/admin/addcommodity"}
                className="text-decoration-none list-group-item"
              >
                Add Commodity
              </Link>
              <Link
                to={"/admin/showallcommodity"}
                className="text-decoration-none list-group-item"
              >
                Show Commodities
              </Link>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="#req-list"
              className="btn d-flex justify-content-start gap-3 text-white d-flex"
              aria-current="page"
              data-bs-toggle="collapse"
              style={{ background: "#0abf53" }}
            >
              <div>
                <i className="fa-solid fa-file-lines fa-lg"></i>
              </div>
              <div>
                <span className="">Requests</span>
              </div>
            </a>
            <ul className="list-group collapse" id="req-list">
              <Link
                to={"/admin/showunapproveproduct"}
                className="text-decoration-none list-group-item"
              >
                Show Product Request
              </Link>
              <Link
                to={"/admin/showunapprovecommodity"}
                className="text-decoration-none list-group-item"
              >
                Show Commodity Request
              </Link>
              <Link
                to={"/admin/showrejectedproduct"}
                className="text-decoration-none list-group-item"
              >
                Show Rejected Product
              </Link>
              <Link
                to={"/admin/showrejectedcommodity"}
                className="text-decoration-none list-group-item"
              >
                Show Rejected Commodity
              </Link>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="#customer-list"
              className="btn d-flex justify-content-start gap-3 text-white d-flex"
              aria-current="page"
              data-bs-toggle="collapse"
              style={{ background: "#0abf53" }}
            >
              <div>
                <i className="fa-solid fa-user fa-lg"></i>
              </div>
              <div>
                <span className="">Customers</span>
              </div>
            </a>
            <ul className="list-group collapse" id="customer-list">
              <Link
                to={"/admin/showallcustomers"}
                className="text-decoration-none list-group-item"
              >
                Show Customers
              </Link>
            </ul>
          </li>
        </ul>
        <hr />
        <div className="btn btn-light mb-2">
          <h5>Admin Profile</h5>
        </div>
      </div>
    </>
  );
}

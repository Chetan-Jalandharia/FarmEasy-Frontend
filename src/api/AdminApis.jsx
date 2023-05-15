import axios from "axios";
import {
  ADD_COMMODITY,
  ADD_COMMODITY_CAT,
  ADD_PRODUCT_CATEGORY,
  DELETE_COMMODITY,
  SHOW_COMMODITY,
  DELETE_COMMODITY_CAT,
  DELETE_PRODUCT_CATEGORY,
  SHOW_ALL_COMMODITY_CAT,
  SHOW_ALL_PRODUCT_CATEGORY,
  SHOW_COMMODITY_REQ,
  SHOW_PRODUCT_REQ,
  SHOW_SINGLE_COMMODITY,
  SHOW_SINGLE_COMMODITY_CAT,
  SHOW_PRODUCT,
  SHOW_SINGLE_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SHOW_SINGLE_PRODUCT_CATEGORY,
  USER_LOGIN,
  UPDATE_PRODUCT,
  UPDATE_COMMODITY,
  UPDATE_PRODUCT_CATEGORY,
  UPDATE_COMMODITY_CAT,
  DELETE_MANY_COMMODITY,
  APPROVE_PRODUCT,
  REJECT_PRODUCT,
  APPROVE_COMMODITY,
  REJECT_COMMODITY,
  SHOW_REJECTED_PRODUCT,
  SHOW_REJECTED_COMMODITY,
  SHOW_ALL_CUSTOMERS,
  SHOW_CUSTOMER,
  UPDATE_CUSTOMER,
  REMOVE_CUSTOMER,
} from "../Common/routes/AdminUrl";

const Axios = axios.create({
  baseURL: "http://localhost:5000",
});

// const auth = sessionStorage.getItem("auth");

class AdminApi {
  userLogin(email, password) {
    // const auth = sessionStorage.getItem("auth");
    return Axios.post(USER_LOGIN, {
      email,
      password,
    });
  }

  //--------------------Product Category Apis---------------------
  showProductCategory() {
    const auth = sessionStorage.getItem("auth");
    console.log("admin cat");
    console.log("admin auth " + auth);

    return Axios.get(SHOW_ALL_PRODUCT_CATEGORY, {
      headers: { auth: auth },
    });
  }
  addProductCategory(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(ADD_PRODUCT_CATEGORY, formdata, {
      headers: { auth: auth },
    });
  }
  updateProductCategory(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.patch(UPDATE_PRODUCT_CATEGORY, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  deleteProductCategory(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(DELETE_PRODUCT_CATEGORY, {
      headers: { auth: auth },
      data: { id: id },
    });
  }
  showSingleProductCat(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(`${SHOW_SINGLE_PRODUCT_CATEGORY}/${id}`, {
      headers: { auth: auth },
    });
  }
  //-------------------------------------------------------------------------------------------

  //--------------------Commodity Category Apis---------------------

  showCommodityCategory() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_COMMODITY_CAT, {
      headers: { auth: auth },
    });
  }
  addCommodityCategory(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(ADD_COMMODITY_CAT, formdata, {
      headers: { auth: auth },
    });
  }
  updateCommodityCategory(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.patch(UPDATE_COMMODITY_CAT, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  deleteCommodityCategory(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(DELETE_COMMODITY_CAT, {
      headers: { auth: auth },
      data: { id: id },
    });
  }
  showSingleCommodityCat(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(`${SHOW_SINGLE_COMMODITY_CAT}/${id}`, {
      headers: { auth: auth },
    });
  }
  //----------------------------------------------------------------------------------------------

  //--------------------Product Apis---------------------

  addProduct(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(ADD_PRODUCT, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  updateProduct(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.patch(UPDATE_PRODUCT, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  showAllProduct() {
    // console.log(auth);
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_PRODUCT, {
      headers: { auth: auth },
    });
  }
  deleteProduct(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(DELETE_PRODUCT, {
      headers: { auth: auth },
      data: { id: id },
    });
  }
  showSingleProduct(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(`${SHOW_SINGLE_PRODUCT}/${id}`, {
      headers: { auth: auth },
    });
  }
  //---------------------------------------------------------------------------------------------

  //--------------------Commodity Apis---------------------

  addCommodity(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(ADD_COMMODITY, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  updateCommodity(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.patch(UPDATE_COMMODITY, formdata, {
      headers: {
        auth: auth,
      },
    });
  }

  showAllCommodity() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_COMMODITY, {
      headers: { auth: auth },
    });
  }
  deleteCommodity(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(DELETE_COMMODITY, {
      headers: { auth: auth },
      data: { id: id },
    });
  }
  deleteSelectedCommodity(list) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(DELETE_MANY_COMMODITY, {
      headers: { auth: auth },
      data: { list: list },
    });
  }
  showSingleCommodity(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(`${SHOW_SINGLE_COMMODITY}/${id}`, {
      headers: { auth: auth },
    });
  }
  //--------------------------------------------------------------------------------------------

  //--------------------Product Requests Apis---------------------

  showProductRequests() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_PRODUCT_REQ, {
      headers: { auth: auth },
    });
  }

  showRejectedProduct() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_REJECTED_PRODUCT, {
      headers: { auth: auth },
    });
  }
  approveProduct(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      APPROVE_PRODUCT,
      { id },
      {
        headers: {
          auth: auth,
        },
      }
    );
  }
  rejectProduct(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      REJECT_PRODUCT,
      { id },
      {
        headers: {
          auth: auth,
        },
      }
    );
  }
  //--------------------------------------------------------------------------------------------

  //--------------------Commodity Requests Apis---------------------

  showCommodityRequests() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_COMMODITY_REQ, {
      headers: { auth: auth },
    });
  }

  showRejectedCommodity() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_REJECTED_COMMODITY, {
      headers: { auth: auth },
    });
  }

  approveCommodity(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      APPROVE_COMMODITY,
      { id },
      {
        headers: {
          auth: auth,
        },
      }
    );
  }
  rejectCommodity(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      REJECT_COMMODITY,
      { id },
      {
        headers: {
          auth: auth,
        },
      }
    );
  }
  //--------------------------------------------------------------------------------------------

  //--------------------Customer Apis---------------------

  showCustomers() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_CUSTOMERS, {
      headers: { auth: auth },
    });
  }

  showSingleCustomer(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(`${SHOW_CUSTOMER}/${id}`, {
      headers: { auth: auth },
    });
  }

  updateCustomer(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.patch(UPDATE_CUSTOMER, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  deleteCustomer(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(REMOVE_CUSTOMER, {
      headers: { auth: auth },
      data: { id: id },
    });
  }
  //--------------------------------------------------------------------------------------------
}

export default new AdminApi();

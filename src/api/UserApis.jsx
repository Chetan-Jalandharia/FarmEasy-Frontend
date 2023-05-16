import axios from "axios";
import {
  ACCEPT_BORROW_REQ,
  ACCEPT_PRO_PURCHASE_REQ,
  ADD_COMMODITY,
  ADD_PRODUCT,
  DELETE_COMMODITY,
  DELETE_PRODUCT,
  REGISTER_USER,
  REJECT_BORROW_REQ,
  REJECT_PRO_PURCHASE_REQ,
  REMOVE_CUSTOMER,
  SEND_BORROW_REQ,
  SEND_COM_PURCHASE_REQ,
  SEND_PRO_PURCHASE_REQ,
  SHOW_ALL_ADDED_COMMODITY,
  SHOW_ALL_ADDED_PRODUCT,
  SHOW_ALL_BORROWED_PRODUCT,
  SHOW_ALL_BORROW_REQ,
  SHOW_ALL_BORROW_REQ_SEND,
  SHOW_ALL_COMMODITY,
  SHOW_ALL_COMMODITY_CAT,
  SHOW_ALL_CUSTOMERS,
  SHOW_ALL_LENDED_PRODUCT,
  SHOW_ALL_PRODUCT,
  SHOW_ALL_PRODUCT_CATEGORY,
  SHOW_ALL_PRO_PURCHASE_REQ,
  SHOW_ALL_PRO_PURCHASE_REQ_SEND,
  SHOW_ALL_SELLED_PRODUCT,
  SHOW_CUSTOMER,
  SHOW_SINGLE_COMMODITY,
  SHOW_SINGLE_PRODUCT,
  UPDATE_CUSTOMER,
  VERIFY_USER,
} from "../Common/routes/CustomerUrl";
const Axios = axios.create({
  baseURL:process.env.REACT_APP_SERVER_URL
});

// const auth = sessionStorage.getItem("auth");

class UserApies {
  userSignup(formdata) {
    return Axios.post(REGISTER_USER, formdata);
  }

  verifyUser(id) {
    // const auth = sessionStorage.getItem("auth");
    return Axios.post(VERIFY_USER, { id });
  }
  //--------------------Product Category Apis---------------------
  showProductCategory() {
    const auth = sessionStorage.getItem("auth");

    console.log("customer cat");
    console.log("customer auth " + auth);
    return Axios.get(SHOW_ALL_PRODUCT_CATEGORY, {
      headers: { auth: auth },
    });
  }

  //-------------------------------------------------------------------------------------------

  //--------------------Product  Apis---------------------
  showAllProducts() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_PRODUCT, {
      headers: { auth: auth },
    });
  }
  showAllAddedProduct() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_ADDED_PRODUCT, {
      headers: { auth: auth },
    });
  }
  addProduct(formdata) {
    const auth = sessionStorage.getItem("auth");

    console.log("user api");
    return Axios.post(ADD_PRODUCT, formdata, {
      headers: {
        auth: auth,
      },
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
  //-------------------------------------------------------------------------------------------

  //--------------------Request  Apis---------------------
  showAllBorrowReq() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_BORROW_REQ, {
      headers: { auth: auth },
    });
  }
  acceptBorrowReq(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      ACCEPT_BORROW_REQ,
      { id },
      {
        headers: { auth: auth },
      }
    );
  }
  rejectBorrowReq(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      REJECT_BORROW_REQ,
      { id },
      {
        headers: { auth: auth },
      }
    );
  }
  acceptProPurchaseReq(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      ACCEPT_PRO_PURCHASE_REQ,
      { id },
      {
        headers: { auth: auth },
      }
    );
  }
  rejectProPurchaseReq(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(
      REJECT_PRO_PURCHASE_REQ,
      { id },
      {
        headers: { auth: auth },
      }
    );
  }
  showAllBorrowedProduct() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_BORROWED_PRODUCT, {
      headers: { auth: auth },
    });
  }
  showAllLendedProduct() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_LENDED_PRODUCT, {
      headers: { auth: auth },
    });
  }
  showAllSelledProduct() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_SELLED_PRODUCT, {
      headers: { auth: auth },
    });
  }
  showAllBorrowReqSend() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_BORROW_REQ_SEND, {
      headers: { auth: auth },
    });
  }
  showAllProPurchaseReqSend() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_PRO_PURCHASE_REQ_SEND, {
      headers: { auth: auth },
    });
  }
  showAllPurchaseReq() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_PRO_PURCHASE_REQ, {
      headers: { auth: auth },
    });
  }

  sendBorrowReq(formdata) {
    const auth = sessionStorage.getItem("auth");
    console.log(formdata);
    return Axios.post(SEND_BORROW_REQ, formdata, {
      headers: {
        auth: auth,
      },
    });
  }

  sendProPurchaseReq(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(SEND_PRO_PURCHASE_REQ, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  sendComPurchaseReq(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(SEND_COM_PURCHASE_REQ, formdata, {
      headers: {
        auth: auth,
      },
    });
  }

  //--------------------Commodity Category Apis---------------------
  showCommodityCategory() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_COMMODITY_CAT, {
      headers: { auth: auth },
    });
  }

  //-------------------------------------------------------------------------------------------

  //--------------------Commodity  Apis---------------------
  showAllCommodity() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_COMMODITY, {
      headers: { auth: auth },
    });
  }

  showAllAddedCommodity() {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(SHOW_ALL_ADDED_COMMODITY, {
      headers: { auth: auth },
    });
  }
  addCommodity(formdata) {
    const auth = sessionStorage.getItem("auth");

    return Axios.post(ADD_COMMODITY, formdata, {
      headers: {
        auth: auth,
      },
    });
  }
  deleteCommodity(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.delete(DELETE_COMMODITY, {
      headers: { auth: auth },
      data: { id: id },
    });
  }

  showSingleCommodity(id) {
    const auth = sessionStorage.getItem("auth");

    return Axios.get(`${SHOW_SINGLE_COMMODITY}/${id}`, {
      headers: { auth: auth },
    });
  }
  //-------------------------------------------------------------------------------------------

  //--------------------Customer Apis------------------------

  showSingleCustomer(id) {
    const auth = sessionStorage.getItem("auth");
    // console.log(auth);
    // console.log(id);
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

export default new UserApies();

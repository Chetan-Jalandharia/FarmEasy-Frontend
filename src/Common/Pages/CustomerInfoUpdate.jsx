import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminApis from "../../api/AdminApis";
import { Alert } from "../Alert";
function CustomerInfoUpdate() {
  const { id } = useParams();

  const [Customer, setCustomer] = useState({});
  useEffect(() => {
    AdminApis.showSingleCustomer(id).then((val) => {
      let pData = val.data.data;
      setCustomer({
        id:id,
        name: pData?.customerName,
        email: pData?.customerEmail,
        phone: pData?.customerPhone,
      });
    });
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCustomer({
      ...Customer,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const { image, name, phone, email } = Customer;
    ;

  
    AdminApis.updateCustomer(Customer)
      .then((val) => {
        if (val.status === 200) {
          Alert.fire({
            icon: "success",
            title: val?.data?.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="myForm">
        <h2>Update Customer Info </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="customer_name">Customer Name:</label>
            <input
              type="text"
              className="form-control"
              id="customer_name"
              placeholder="Enter Customer name"
              name="name"
              value={Customer?.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="customer_email">Email:</label>
            <input
              type="email"
              className="form-control"
              value={Customer?.email}
              id="customer_email"
              placeholder="Enter Customer Email"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="customer_phone">Phone:</label>
            <textarea
              className="form-control inpFeild"
              type="tel"
              value={Customer?.phone}
              id="customer_phone"
              placeholder="Enter customer phone"
              name="phone"
              onChange={handleInput}
            ></textarea>
          </div>

          {/* <div className="form-group">
                        <label htmlFor="product_image">Image:</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="product_image"
                            name="image"
                            onChange={handleImg}
                        />
                    </div> */}

          <button type="submit" className=" mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomerInfoUpdate;

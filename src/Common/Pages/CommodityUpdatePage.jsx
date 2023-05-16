import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminApis from "../../api/AdminApis";
import { Alert, Load } from "../Alert";
function CommodityUpdatePage() {
  const { id } = useParams();

  const [Commodity, setCommodity] = useState({});
  useEffect(() => {
    AdminApis.showSingleCommodity(id).then((val) => {
      let cData = val.data.data;
      setCommodity({
        name: cData?.commodityName,
        price: cData?.commodityPrice,
        description: cData?.commodityDescription,
        weight: cData?.commodityWeight,
        quantity: cData?.commodityQuantity,
      });
    });
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCommodity({
      ...Commodity,
      [name]: value,
    });
  };

  const handleImg = (e) => {
    let value = e.target.files[0];
    setCommodity({
      ...Commodity,
      image: value,
    });
  };
  const handleSubmit = (e) => {
    Load.fire({
      title: "Sending Data...",
    });
    e.preventDefault();
    const { image, name, description, price, weight, quantity } = Commodity;
    const formdata = new FormData();

    formdata.append("id", id);
    formdata.append("image", image);
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("weight", weight);
    formdata.append("quantity", quantity);

    AdminApis.updateCommodity(formdata)
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
        <h2>Update Commodity </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="commodity_name">Commodity Name:</label>
            <input
              type="text"
              className="form-control"
              id="commodity_name"
              placeholder="Enter Commodity name"
              name="name"
              value={Commodity?.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="commodity_price">Price:</label>
            <input
              type="number"
              className="form-control"
              value={Commodity?.price}
              id="commodity_price"
              placeholder="Enter Commodity price"
              name="price"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="commodity_description">Description:</label>
            <textarea
              className="form-control inpFeild"
              value={Commodity?.description}
              id="commodity_description"
              placeholder="Enter Commodity description"
              name="description"
              onChange={handleInput}
            ></textarea>
          </div>

          <div className="form-group ">
            <label htmlFor="commodity_weight">Weight in KG:</label>
            <input
              type="number"
              className="form-control"
              id="commodity_weight"
              placeholder="Enter Weight Per Unit"
              name="weight"
              onChange={handleInput}
              value={Commodity.weight}
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="commodity_quantity">Total Quantity:</label>
            <input
              type="number"
              className="form-control"
              id="commodity_quantity"
              placeholder="Enter Quantity"
              name="quantity"
              onChange={handleInput}
              value={Commodity.quantity}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="commodity_image">Image:</label>
            <input
              type="file"
              className="form-control-file"
              id="commodity_image"
              name="image"
              onChange={handleImg}
            />
          </div>

          <button type="submit" className=" mt-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CommodityUpdatePage;

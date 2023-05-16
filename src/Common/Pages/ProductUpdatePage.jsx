import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminApis from "../../api/AdminApis";
import { Alert, Load } from "../Alert";
function ProductUpdatePage() {
  const { id } = useParams();

  const [Product, setProduct] = useState({});
  useEffect(() => {
    AdminApis.showSingleProduct(id).then((val) => {
      let pData = val.data.data;
      setProduct({
        name: pData?.productName,
        price: pData?.productPrice,
        description: pData?.productDescription,
        type: pData?.productType,
      });
    });
  }, []);


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({
      ...Product,
      [name]: value,
    });
  };

  const handleImg = (e) => {
    let value = e.target.files[0];
    setProduct({
      ...Product,
      image: value,
    });
  };
  const handleSubmit = (e) => {
    Load.fire({
      title: "Sending Data...",
    });
    e.preventDefault();
    const { image, name, description, price, type } = Product;
    const formdata = new FormData();

    formdata.append("id", id);
    formdata.append("image", image);
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("type", type);

    AdminApis.updateProduct(formdata)
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
        <h2>Update Product </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="product_name">Product Name:</label>
            <input
              type="text"
              className="form-control"
              id="product_name"
              placeholder="Enter product name"
              name="name"
              value={Product?.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="product_price">Price:</label>
            <input
              type="number"
              className="form-control"
              value={Product?.price}
              id="product_price"
              placeholder="Enter product price"
              name="price"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="product_description">Description:</label>
            <textarea
              className="form-control inpFeild"
              value={Product?.description}
              id="product_description"
              placeholder="Enter product description"
              name="description"
              onChange={handleInput}
            ></textarea>
          </div>

          <div className="form-group mb-3">
            <div className="form-check form-check-inline ms-3">
              <input
                className="form-check-input mt-3"
                type="radio"
                name="type"
                id="inlineRadio1"
                value="sell"
                checked={Product.type === "sell"}
                onClick={handleInput}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Sell Product
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input mt-3"
                type="radio"
                name="type"
                id="inlineRadio2"
                value="rent"
                checked={Product.type === "rent"}
                onClick={handleInput}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Rent Product
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="product_image">Image:</label>
            <input
              type="file"
              className="form-control-file"
              id="product_image"
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

export default ProductUpdatePage;

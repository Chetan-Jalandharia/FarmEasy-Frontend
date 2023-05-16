import { useEffect, useState, useContext, lazy } from "react";

import { Alert, Load } from "../Alert";

import UserApis from "../../api/UserApis";
import AdminApis from "../../api/AdminApis";
import { RefreshContext } from "../Context/RefreshData";

export default function AddProductPage() {
  const { isAdmin } = useContext(RefreshContext);
  const [data, setdata] = useState();

  useEffect(() => {
    try {
      UserApis.showProductCategory().then((val) => {
        setdata(val.data.data);
      });
    } catch (error) {
      console.log("message :" + error);
    }
  }, []);

  const [Product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    type: "",
    image: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setProduct({
      ...Product,
      [name]: value,
    });
  };
  const handleImg = (e) => {
    setProduct({
      ...Product,
      image: e.target.files[0],
    });
  };
  const resetForm = () => {
    setProduct({
      name: "",
      description: "",
      price: "",
      category: "",
      type: "",
      image: "",
    });
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("product_image").value = "";
  };

  const handleSubmit = async (e) => {
    Load.fire({
      title: "Sending Data...",
    });
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", Product.image);
    formdata.append("name", Product.name);
    formdata.append("description", Product.description);
    formdata.append("price", Product.price);
    formdata.append("productType", Product.type);
    formdata.append("category", Product.category);

    (isAdmin ? AdminApis : UserApis)
      .addProduct(formdata)
      .then((val) => {
        if (val.status === 200) {
          resetForm();
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
        <h2>Add Product </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="product_name">Product Name:</label>
            <input
              type="text"
              className="form-control"
              required
              id="product_name"
              placeholder="Enter product name"
              name="name"
              value={Product.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="product_price">Price:</label>
            <input
              type="number"
              className="form-control"
              value={Product.price}
              required
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
              value={Product.description}
              required
              id="product_description"
              placeholder="Enter product description"
              name="description"
              onChange={handleInput}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="selectProCat">Select Category</label>
            <select
              className="form-control inpFeild selectFeild"
              value={Product.category}
              required
              name="category"
              id="selectProCat"
              onChange={handleInput}
            >
              <option value="" disabled selected hidden>
                select product category
              </option>
              {data?.map((ele, index) => {
                return (
                  <option value={ele._id} key={index}>
                    {ele.categoryName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group mb-3">
            <div className="form-check form-check-inline ms-3">
              <input
                className="form-check-input mt-3"
                type="radio"
                name="type"
                id="inlineRadio1"
                value="sell"
                onChange={handleInput}
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
                onChange={handleInput}
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
              required
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

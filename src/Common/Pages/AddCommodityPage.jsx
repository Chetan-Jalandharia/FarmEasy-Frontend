import { useEffect, useState, useContext } from "react";
import { Alert, Load } from "../Alert";
import AdminApis from "../../api/AdminApis";
import UserApis from "../../api/UserApis";
import { RefreshContext } from "../Context/RefreshData";
import { useNavigate } from "react-router-dom";
export default function AddCommodityPage() {

  const auth = sessionStorage.getItem("auth");
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const { isAdmin } = useContext(RefreshContext);

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    UserApis.showCommodityCategory()
      .then((val) => {
        setdata(val.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);

  const [commodity, setcommodity] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    weight: "",
    quantity: "",
    image: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setcommodity({
      ...commodity,
      [name]: value,
    });
  };
  const handleImg = (e) => {
    setcommodity({
      ...commodity,
      image: e.target.files[0],
    });
  };
  const resetForm = () => {
    setcommodity({
      name: "",
      description: "",
      price: "",
      category: "",
      weight: "",
      quantity: "",
      image: "",
    });

    document.getElementById("commodity_image").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Load.fire({
      title: "Sending Data...",
    });
    const formdata = new FormData();
    formdata.append("image", commodity.image);
    formdata.append("name", commodity.name);
    formdata.append("description", commodity.description);
    formdata.append("price", commodity.price);
    formdata.append("weight", commodity.weight);
    formdata.append("quantity", commodity.quantity);
    formdata.append("category", commodity.category);

    (isAdmin ? AdminApis : UserApis)
      .addCommodity(formdata)
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
        <h2>Add Commodity </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="commodity_name">Commodity Name:</label>
            <input
              type="text"
              className="form-control"
              required
              id="commodity_name"
              placeholder="Enter commodity name"
              name="name"
              value={commodity.name}
              onChange={handleInput}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="commodity_price">Price:</label>
            <input
              type="number"
              className="form-control"
              value={commodity.price}
              required
              id="commodity_price"
              placeholder="Enter commodity price"
              name="price"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="commodity_description">Description:</label>
            <textarea
              className="form-control inpFeild"
              value={commodity.description}
              required
              id="commodity_description"
              placeholder="Enter commodity description"
              name="description"
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="selectProCat">Select Category</label>
            <select
              className="form-control inpFeild selectFeild"
              value={commodity.category}
              required
              name="category"
              id="selectProCat"
              onChange={handleInput}
            >
              <option value="" disabled selected hidden>
                select commodity category
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

          <div className="form-group ">
            <label htmlFor="commodity_weight">Weight in KG:</label>
            <input
              type="number"
              className="form-control"
              id="commodity_weight"
              placeholder="Enter Weight Per Unit"
              name="weight"
              onChange={handleInput}
              value={commodity.weight}
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
              value={commodity.quantity}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="commodity_image">Image:</label>
            <input
              type="file"
              className="form-control-file"
              id="commodity_image"
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

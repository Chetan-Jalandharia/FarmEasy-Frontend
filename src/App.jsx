import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const MainUser = lazy(() => import("./User/UserPanel"));

const Main = lazy(() => import("./Admin/AdminPanel"));

const AddProductPage = lazy(() => import("./Common/Pages/AddProductPage"));

const ProductsListPage = lazy(() => import("./Common/Pages/ProductsListPage"));

const ShowProductPage = lazy(() => import("./Common/Pages/ProductDetailsPage"));

const UpdateProductPage = lazy(() =>
  import("./Common/Pages/ProductUpdatePage")
);

const AddProductCategoryPage = lazy(() =>
  import("./Admin/Pages/AddProductCategoryPage")
);
const ProductCatPage = lazy(() =>
  import("./Admin/Pages/ProductCategoryListPage")
);
const ShowProductCategoryPage = lazy(() =>
  import("./Admin/Pages/ProductCategoryDetailsPage")
);
const UpdateProductCategoryPage = lazy(() =>
  import("./Admin/Pages/ProductCategoryUpdatePage")
);

const AddCommodityPage = lazy(() => import("./Common/Pages/AddCommodityPage"));
const CommodityListPage = lazy(() =>
  import("./Common/Pages/CommodityListPage")
);
const ShowCommodityPage = lazy(() =>
  import("./Common/Pages/CommodityDetailsPage")
);
const UpdateCommodityPage = lazy(() =>
  import("./Common/Pages/CommodityUpdatePage")
);

const AddCommodityCategoryPage = lazy(() =>
  import("./Admin/Pages/AddCommodityCategoryPage")
);
const CommodityCatPage = lazy(() =>
  import("./Admin/Pages/CommodityCategoryListPage")
);
const ShowCommodityCategoryPage = lazy(() =>
  import("./Admin/Pages/CommodityCategoryDetailsPage")
);
const UpdateCommodityCategoryPage = lazy(() =>
  import("./Admin/Pages/CommodityCategoryUpdatePage")
);

const UnApprovedProducts = lazy(() =>
  import("./Admin/Pages/UnApprovedProducts")
);
const UnApprovedCommodity = lazy(() =>
  import("./Admin/Pages/UnApprovedCommodity")
);

const ShowRejectedProducts = lazy(() =>
  import("./Admin/Pages/ShowRejectedProducts")
);
const ShowRejectedCommodity = lazy(() =>
  import("./Admin/Pages/ShowRejectedCommodity")
);

const CustomerListPage = lazy(() => import("./Admin/Pages/ShowCustomers"));
const ShowCustomerInfo = lazy(() => import("./Common/Pages/CustomerInfoPage"));
const UpdateCustomer = lazy(() => import("./Common/Pages/CustomerInfoUpdate"));
const DashBoard = lazy(() => import("./Admin/Pages/DashBoard"));

import Loader from "./Common/Components/Loader";
const Home = lazy(() => import("./User/Pages/Home"));

const Login = lazy(() => import("./Common/Pages/Login"));
import ProtectedRoute from "./User/Components/ProtectedRoute";
import Signup from "./User/Components/Signup";
import VerifyMail from "./User/Components/VerifyMail";
const ShowAllCommodity = lazy(() =>
  import("./User/Pages/Commodity/ShowAllCommodity")
);
const ShowAllProduct = lazy(() =>
  import("./User/Pages/Products/ShowAllProduct")
);

const ShowProCategories = lazy(() =>
  import("./User/Pages/Categories/ShowProCategories")
);
const ShowComCategories = lazy(() =>
  import("./User/Pages/Categories/ShowComCategories")
);

function App() {
  return (

    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="/user">
            <Route path="verify" element={<VerifyMail />} />
          </Route>

          <Route
            path="/admin"
            element={
              <Suspense fallback={<Loader />}>
                <Main />
              </Suspense>
            }
          >
            <Route index element={<DashBoard />} />

            <Route path="/admin">
              //------------- Product Routes-------------------------
              <Route path="addproduct" element={<AddProductPage />} />
              <Route path="showallproducts" element={<ProductsListPage />} />
              <Route path="showproduct/:id" element={<ShowProductPage />} />
              <Route path="updateproduct/:id" element={<UpdateProductPage />} />
              //---------------Product Category Routes----------------
              <Route
                path="addproductcategory"
                element={<AddProductCategoryPage />}
              />
              <Route
                path="showproductcategories"
                element={<ProductCatPage />}
              />
              <Route
                path="showproductcategory/:id"
                element={<ShowProductCategoryPage />}
              />
              <Route
                path="category/update/:id"
                element={<UpdateProductCategoryPage />}
              />
              //---------------Commodity Routes------------------------
              <Route path="addcommodity" element={<AddCommodityPage />} />
              <Route path="showallcommodity" element={<CommodityListPage />} />
              <Route path="showcommodity/:id" element={<ShowCommodityPage />} />
              <Route
                path="updatecommodity/:id"
                element={<UpdateCommodityPage />}
              />
              //---------------Commodity Category Routes----------------
              <Route
                path="addcommoditycategory"
                element={<AddCommodityCategoryPage />}
              />
              <Route
                path="showcommoditycategories"
                element={<CommodityCatPage />}
              />
              <Route
                path="showcommoditycategory/:id"
                element={<ShowCommodityCategoryPage />}
              />
              <Route
                path="commodity/category/update/:id"
                element={<UpdateCommodityCategoryPage />}
              />
              //-------------------Requests Routes--------------------------
              <Route
                path="showunapproveproduct"
                element={<UnApprovedProducts />}
              />
              <Route
                path="showunapprovecommodity"
                element={<UnApprovedCommodity />}
              />
              <Route
                path="showrejectedproduct"
                element={<ShowRejectedProducts />}
              />
              <Route
                path="showrejectedcommodity"
                element={<ShowRejectedCommodity />}
              />
              //-------------------Customer Routes--------------------------
              <Route path="showallcustomers" element={<CustomerListPage />} />
              <Route path="showcustomer/:id" element={<ShowCustomerInfo />} />
              <Route path="updatecustomer/:id" element={<UpdateCustomer />} />
            </Route>
          </Route>

          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <MainUser />
              </Suspense>
            }
          >
            <Route index element={<Home />} />
            <Route path="profile/:id" element={<ShowCustomerInfo />} />

            <Route path="product">
              <Route
                path="sell"
                element={<ProtectedRoute Component={AddProductPage} />}
              />
              <Route
                path="show/:id"
                element={<ProtectedRoute Component={ShowProductPage} />}
              />
              <Route path="showall" element={<ShowAllProduct />} />

              <Route
                path="categories"
                element={<ProtectedRoute Component={ShowProCategories} />}
              />
            </Route>
            <Route path="commodity">
              <Route path="sell" element={<AddCommodityPage />} />
              <Route
                path="show/:id"
                element={<ProtectedRoute Component={ShowCommodityPage} />}
              />
              <Route path="showall" element={<ShowAllCommodity />} />
              <Route
                path="categories"
                element={<ProtectedRoute Component={ShowComCategories} />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

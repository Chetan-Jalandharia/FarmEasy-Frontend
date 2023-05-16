import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import react, { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserApis from "../../api/UserApis";
import { MdHome, MdHomeFilled, MdMail, MdPhone } from "react-icons/md";

import Loader from "../Components/Loader";
import { RefreshContext } from "../Context/RefreshData";
const ProductCard = lazy(() =>
  import("../../User/Components/SubComponents/ProductCard")
);
const RequestCard = lazy(() =>
  import("../../User/Components/SubComponents/RequestCard")
);
const PurchaseRequestCard = lazy(() =>
  import("../../User/Components/SubComponents/PurchaseRequestCard")
);
const PurchaseRequestViewCard = lazy(() =>
  import("../../User/Components/SubComponents/PurchaseRequestViewCard")
);

function CustomerInfoPage() {
  let { id } = useParams();
  const [User, setUser] = useState();
  const [value, setValue] = useState(0);
  const [Data, setData] = useState();
  const { Update, setUpdate } = useContext(RefreshContext);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    UserApis.showSingleCustomer(id)
      .then((val) => {
        setUser(val.data.data.customerId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (value === 0) {
      UserApis.showAllAddedProduct()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 1) {
      UserApis.showAllAddedCommodity()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 2) {
      UserApis.showAllBorrowReq()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 3) {
      UserApis.showAllPurchaseReq()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 4) {
      UserApis.showAllBorrowReqSend()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 5) {
      UserApis.showAllProPurchaseReqSend()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 6) {
      UserApis.showAllBorrowedProduct()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 7) {
      UserApis.showAllLendedProduct()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (value === 8) {
      UserApis.showAllSelledProduct()
        .then((val) => {
          setData(val.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value, Update]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Suspense fallback={<Loader />}>
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box
              sx={{
                py: 3,
                px: 3,
                border: 1,
                borderColor: "divider",
                minHeight: 300,
              }}
            >
              <Grid container spacing={5}>
                {children}
              </Grid>
            </Box>
          )}
        </div>
      </Suspense>
    );
  }

  return (
    <Container>
      <Box sx={{ pt: 4, pb: 1 }}>
        <Grid container>
          <Grid item md={6} xs={12} sm={6}>
            <Box>
              <Avatar
                alt="User Image"
                src={User?.imgPath}
                sx={{ width: 200, height: 200, mx: "auto" }}
              />
            </Box>
          </Grid>

          <Grid item md={6} xs={12} sm={6}>
            <Box sx={{ textAlign: isSm ? "center" : "left" }}>
              <Typography fontSize={40} paddingLeft={1}>
                {User?.customerName}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: isSm ? "center" : "left",
                }}
              >
                <IconButton>
                  <MdMail />
                </IconButton>
                <Typography variant="body1">{User?.customerEmail}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: isSm ? "center" : "left",
                }}
              >
                <IconButton>
                  <MdPhone />
                </IconButton>
                <Typography variant="body1">{User?.customerPhone}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: isSm ? "center" : "left",
                }}
              >
                <IconButton>
                  {" "}
                  <MdHome />
                </IconButton>
                <Typography variant="body1">
                  {User?.customerAddress[0].street},{" "}
                  {User?.customerAddress[0].city},{" "}
                  {User?.customerAddress[0].state}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%", py: 3 }}>
        <Box sx={{ border: 1, borderColor: "divider" }}>
          <Tabs
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Product" />
            <Tab label="Commodity" />
            <Tab label="Received borrow request" />
            <Tab label="Received purchase request" />
            <Tab label="Borrow req send" />
            <Tab label="Purchase req send" />
            <Tab label="Product borrowed" />
            <Tab label="Product Lend" />
            <Tab label="product selled" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={12} md={4}>
                <ProductCard
                  key={index}
                  img={val.imgPath}
                  name={val.productName}
                  description={val.productDescription}
                  price={val.productPrice}
                  id={val._id}
                  isPro={true}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={12} md={4}>
                <ProductCard
                  key={index}
                  img={val.imgPath}
                  name={val.commodityName}
                  description={val.commodityDesc}
                  price={val.commodityPrice}
                  id={val._id}
                  isPro={false}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <RequestCard
                  key={index}
                  id={val._id}
                  userId={val?.borrowerId}
                  proId={val?.productId}
                  duration={val?.borrowDuration}
                  sDate={val?.startDate?.slice(0, 10)}
                  eDate={val?.endDate?.slice(0, 10)}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <PurchaseRequestCard
                  key={index}
                  id={val?._id}
                  userId={val?.buyerId}
                  proId={val?.productId}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <RequestCard
                  key={index}
                  userId={val?.ownerId}
                  proId={val?.productId}
                  duration={val?.borrowDuration}
                  sDate={val?.startDate?.slice(0, 10)}
                  eDate={val?.endDate?.slice(0, 10)}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <PurchaseRequestViewCard
                  key={index}
                  userId={val?.ownerId}
                  proId={val?.productId}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <RequestCard
                  key={index}
                  userId={val?.ownerId}
                  proId={val?.productId}
                  duration={val?.borrowDuration}
                  sDate={val?.startDate?.slice(0, 10)}
                  eDate={val?.endDate?.slice(0, 10)}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <RequestCard
                  key={index}
                  userId={val?.borrowerId}
                  proId={val?.productId}
                  duration={val?.borrowDuration}
                  sDate={val?.startDate?.slice(0, 10)}
                  eDate={val?.endDate?.slice(0, 10)}
                />
              </Grid>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={8}>
          {Data?.map((val, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <PurchaseRequestCard
                  key={index}
                  userId={val?.buyerId}
                  proId={val?.productId}
                />
              </Grid>
            );
          })}
        </TabPanel>
      </Box>
    </Container>
  );
}

export default CustomerInfoPage;

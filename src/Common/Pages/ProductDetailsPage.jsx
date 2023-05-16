import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert, ConfirmAlert } from "../Alert";
import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import AdminApis from "../../api/AdminApis";
import UserApis from "../../api/UserApis";

function ProductDetailsPage() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [SDate, setSDate] = useState(null);
  const [EDate, setEDate] = useState(null);
  const [Product, setProduct] = useState();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    UserApis.showSingleProduct(id)
      .then((val) => {
        setProduct(val.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendBorrowReq = () => {
    handleClose();
    const formdata = {
      productId: id,
      startDate: SDate,
      endDate: EDate,
    };

    UserApis.sendBorrowReq(formdata)
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

  const handleRequest = (isBorrow) => {
    if (isBorrow) {
      //open madal take input send borrow req
      handleOpen();
    } else {
      // send purchase req
      const formdata = {
        productId: id,
      };
      ConfirmAlert.fire({
        title: "Confirm Purchase Request",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          UserApis.sendProPurchaseReq(formdata).then((val) => {
            Alert.fire("Success", "Purchase Request send", "success");
          });
        }
      });
    }
  };

  return (
    <>
      <Container sx={{ minHeight: "70vh" }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Product Borrow Duration </DialogTitle>
          <DialogContent>
            <DialogContentText>Select Start Date :</DialogContentText>
          
            <input
              style={{ width: "100%", margin: "10px 0 0 0" }}
              type="date"
              onChange={(e) => setSDate(e.target.value)}
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>Select End Date :</DialogContentText>
            <input
              style={{ width: "100%", margin: "10px 0 0 0" }}
              type="date"
              onChange={(e) => setEDate(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={sendBorrowReq}>Send Request</Button>
          </DialogActions>
        </Dialog>
        <Grid container  marginBottom={3}>
          <Grid item md={6} xs={12} sm={6}>
            <Box sx={{mt:4}}>
              <img
                src={
                  Product?.imgPath
                }
                className="rounded border"
                height={"90%"}
                width={"100%"}
                alt="Image"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
               mt:5,
               px:2,
                textAlign: isSm ? "center" : "left",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography fontSize={"2rem"} sx={{ wordBreak: "break-word" }} fontWeight={"bold"}>
                    {Product?.productName}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                    {Product?.productDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    ₹{Product?.productPrice}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" sx={{ wordBreak: "break-word" }} fontWeight={"bold"}>
                    {Product?.productDetails}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{ minWidth: 110, mx: 1 }}
                      onClick={() => handleRequest(Product?.isRent)}
                    >
                      {Product?.isRent ? "Borrow" : "Buy"}
                    </Button>
                    <Button variant="contained" sx={{ minWidth: 110, mx: 1 }}>
                      Contact
                    </Button>
                  </Box>
                </Grid>
              </Grid>
        
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProductDetailsPage;

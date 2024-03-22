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
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import react, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminApis from "../../api/AdminApis";
import UserApis from "../../api/UserApis";
import { Alert } from "../Alert";
import { RefreshContext } from "../Context/RefreshData";

function CommodityDetailsPage() {
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [Quantity, setQuantity] = useState(1);

  const [Commodity, setCommodity] = useState();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const auth = sessionStorage.getItem("auth");
  const navigate = useNavigate();
  const {Update} = useContext(RefreshContext)
  
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    UserApis.showSingleCommodity(id)
      .then((val) => {
        setCommodity(val.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth,Update]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendReq = () => {
    handleClose();
    const formdata = {
      commodityId: id,
      quantity: Quantity,
    };
    UserApis.sendComPurchaseReq(formdata)
      .then((val) => {
        if (val.status === 200) {
          Alert.fire({
            icon: "success",
            title: "Request Send Successfully",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setQuantity(1);
  };
  return (
    <>
      <Container sx={{ minHeight: "70vh" }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Send Purchase Request</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter Quantity to Buy :</DialogContentText>

            <input
              style={{ width: "100%", margin: "10px 0 0 0" }}
              type="number"
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={sendReq}>Send Request</Button>
          </DialogActions>
        </Dialog>
        <Grid container marginBottom={3}>
          <Grid item md={6} xs={12} sm={6}>
            <Box sx={{ mt: 4 }}>
              <img
                src={
                  Commodity?.imgPath
                }
                className="rounded border"
                // height={"90%"}
                width={"95%"}
                alt="Image"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box
              sx={{
                mt: 5,
                px: 2,
                textAlign: isSm ? "center" : "left",
              }}
              component="div"
              whiteSpace="normal"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <Box>
                    <Typography
                      sx={{ wordBreak: "break-word", fontSize: "2rem" }}
                    >
                      {Commodity?.commodityName}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                    {Commodity?.commodityDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    ₹{Commodity?.commodityPrice}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h6" fontWeight={"bold"}>
                    {Commodity?.commodityDetails}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{ minWidth: 110, mx: 1 }}
                      onClick={() => handleOpen()}
                    >
                      Buy
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

export default CommodityDetailsPage;

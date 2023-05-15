import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Button, CardActionArea, CardActions } from "@mui/material";

import React, { useEffect, useState } from "react";
// import { ShowProduct } from "../../Actions/Product";
import { useNavigate } from "react-router-dom";
import UserApis from "../../../api/UserApis";
import { Toast } from "../../../Common/Alert";
const RequestCard = ({ id, userId, proId, duration, sDate, eDate }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    UserApis.showSingleCustomer(userId)
      .then((val) => {
        console.log(val.data);
        setuser(val.data.data);
      })
      .catch((err) => {
        console.log("message:" + err);
      });

    UserApis.showSingleProduct(proId)
      .then((val) => {
        console.log(val.data);
        setProduct(val.data.data);
      })
      .catch((err) => {
        console.log("message:" + err);
      });
  }, []);

  const ApproveReq = () => {
    UserApis.acceptBorrowReq(id)
      .then((val) => {
        console.log(val);
        Toast.fire({
          icon: "success",
          title: "Request Accepted",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const RejectReq = () => {
    UserApis.rejectBorrowReq(id)
      .then((val) => {
        console.log(val);
        Toast.fire({
          icon: "success",
          title: "Request Rejected",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 300, mx: "auto" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6">
              User : {user?.name}
            </Typography>

            <Typography variant="h6">
              Product : {Product?.productName}
            </Typography>

            {duration ? (
              <Typography variant="body1">Duration: {duration}</Typography>
            ) : null}
            {sDate && eDate ? (
              <Typography variant="body1" component="div">
                {sDate} to {eDate}
              </Typography>
            ) : null}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{ marginLeft: 1 }}
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => ApproveReq()}
          >
            Accept
          </Button>
          <Button
            sx={{ marginLeft: 1 }}
            size="small"
            variant="outlined"
            color="primary"
            onClick={() => RejectReq()}
          >
            Reject
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RequestCard;

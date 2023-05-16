import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Button, CardActionArea, CardActions } from "@mui/material";

import React, { useEffect, useState } from "react";
// import { ShowProduct } from "../../Actions/Product";
import { useNavigate } from "react-router-dom";
import UserApis from "../../../api/UserApis";
import { Toast } from "../../../Common/Alert";

const PurchaseRequestCard = ({ id, userId, proId }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  const [Product, setProduct] = useState(null);

  useEffect(() => {
    UserApis.showSingleCustomer(userId)
      .then((val) => {
        setuser(val.data.data);
      })
      .catch((err) => {
        console.log("message:" + err);
      });

    UserApis.showSingleProduct(proId)
      .then((val) => {
        setProduct(val.data.data);
      })
      .catch((err) => {
        console.log("message:" + err);
      });
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 300, mx: "auto", minHeight: 200 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6">
              User : {user?.name}
            </Typography>

            <Typography variant="h6">
              Product : {Product?.productName}
            </Typography>
            <Typography variant="h6">
              Product Price: {Product?.productPrice}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{ marginLeft: 1 }}
            size="small"
            variant="outlined"
            color="primary"
          >
            Details
          </Button>
      
        </CardActions>
      </Card>
    </>
  );
};

export default PurchaseRequestCard;

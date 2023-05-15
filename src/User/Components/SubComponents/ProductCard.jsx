import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import { Button, CardActionArea, CardActions } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../../api/UserApis";
import { Alert } from "../../../Common/Alert";
import { RefreshContext } from "../../../Common/Context/RefreshData";
const ProductCard = ({ img, name, description, price, id, isPro }) => {
  const navigate = useNavigate();
  let { Update, setUpdate } = useContext(RefreshContext);
  const DeletePro = (id) => {
    Axios.deleteProduct(id).then((val) => {
      setUpdate((pre)=>pre+1);
      // console.log(Update);
      Alert.fire({
        icon: "success",
        title: "Deleted successfully",
      });
    });
  };
  const DeleteCom = (id) => {
    Axios.deleteCommodity(id).then((val) => {
      setUpdate((pre)=>pre+1);
      // console.log(Update);
      Alert.fire({
        icon: "success",
        title: "Deleted successfully",
      });
    });  };
  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 280, mx: "auto" }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={img} alt=" Image" />
          <CardContent>
            <Typography gutterBottom variant="h6" noWrap component="div">
              {name}
            </Typography>

            <Typography variant="body2" noWrap color="text.secondary">
              {description}
            </Typography>

            <Typography variant="body1" component="div">
              ₹{price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{ marginLeft: 1 }}
            size="small"
            variant="outlined"
            color="primary"
            onClick={() =>
              isPro
                ? navigate(`/product/show/${id}`)
                : navigate(`/commodity/show/${id}`)
            }
          >
            Details
          </Button>
          <Button
            sx={{ marginLeft: 1 }}
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => (isPro ? DeletePro(id) : DeleteCom(id))}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;

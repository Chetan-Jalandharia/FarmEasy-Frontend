import React, { useEffect, useState } from "react";
import UserApis from "../../../api/UserApis";
import { Container, Grid, Typography } from "@mui/material";
import Card from "../../Components/SubComponents/ProductViewCard";

const ShowAllProduct = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    UserApis.showAllProducts().then((val) => {
      setProduct(val.data.data);
    });
  }, []);
  return (
    <>
      <Container sx={{ minHeight: "75vh" }}>
        <Typography variant="h6" fontWeight={"bold"} sx={{ my: 3, pl: 1 }}>
          All Machines and Equipments
        </Typography>
        <Grid container spacing={3} sx={{ my: 3 }}>
          {Product?.map((value, index) => {
            const {
              imgPath,
              productName,
              productDescription,
              productPrice,
              _id,
            } = value;

            return (
              <Grid item xs={12} sm={4} md={4} lg={3}>
                <Card
                  key={index}
                  img={imgPath}
                  name={productName}
                  description={productDescription}
                  price={productPrice}
                  isPro={true}
                  id={_id}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ShowAllProduct;

import React, { useEffect, useState } from "react";
import UserApis from "../../../api/UserApis";
import { Container, Grid, Typography } from "@mui/material";
import Card from "../../Components/SubComponents/ProductViewCard";

const ShowAllCommodity = () => {
  const [Commodity, setCommodity] = useState([]);
  useEffect(() => {
    UserApis.showAllCommodity().then((val) => {
      setCommodity(val.data.data);
      console.log(val);
    });
  }, []);
  return (
    <>
      <Container sx={{ minHeight: "75vh" }}>
        <Typography variant="h6" fontWeight={"bold"} sx={{ my: 3, pl: 1 }}>
          All Commodities
        </Typography>
        <Grid container spacing={3} sx={{ my: 3 }}>
          {Commodity?.map((value, index) => {
            const {
              imgPath,
              commodityName,
              commodityDescription,
              commodityPrice,
              _id,
            } = value;

            return (
              <Grid item xs={12} sm={4} md={4} lg={3}>
                <Card
                  key={index}
                  img={imgPath}
                  name={commodityName}
                  description={commodityDescription}
                  price={commodityPrice}
                  isPro={false}
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

export default ShowAllCommodity;

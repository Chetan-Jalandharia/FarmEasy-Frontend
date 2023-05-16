import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "../../Components/SubComponents/CategoryCard";
import UserApis from "../../../api/UserApis";
const ShowProCategories = () => {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    UserApis.showProductCategory().then((val) => {
      setCategory(val.data.data);
    });
  }, []);

  return (
    <>
      <Container sx={{minHeight:"75vh"}}>
        <Typography variant="h6" fontWeight={"bold"} sx={{ my: 2, pl: 1 }}>
          All Product Category
        </Typography>
        <Grid container spacing={3} sx={{ mt: 1, mb: 5 }}>
          {Category?.map((value, index) => {
            const { imgPath, categoryName, categoryDesc } = value;

            return (
              <Grid item xs={12} sm={4} md={4} lg={3}>
                <Card
                  img={imgPath}
                  name={categoryName}
                  description={categoryDesc}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ShowProCategories;

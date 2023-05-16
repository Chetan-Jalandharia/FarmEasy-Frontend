import React, { useEffect, useState } from "react";
import Banner from "../../../Common/Components/Banner";
import MainActions from "../../Components/MainActions";
import { Box, Button, Container, Typography } from "@mui/material";
import CategoryBox from "../../Components/SubComponents/CategoryBox";
import UserApis from "../../../api/UserApis";

const Home = () => {
  const [ProCategory, setProCategory] = useState([]);
  const [ComCategory, setComCategory] = useState([]);

  useEffect(() => {
    UserApis.showProductCategory().then((val) => {
      setProCategory(val.data.data);
    });
  }, []);
  useEffect(() => {
    UserApis.showCommodityCategory().then((val) => {
      setComCategory(val.data.data);
    });
  }, []);

  return (
    <>
      <Banner />
      <MainActions />
      <Container sx={{ paddingBottom: 5 }}>
        <Box display={"flex"} justifyContent={"space-between"} padding={1}>
          <Typography
            fontSize={18}
            fontWeight={"bold"}
            padding={1}
            color={"#FF8B13"}
          >
            All Products Category
          </Typography>
          <Button>View All</Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "nowrap",
            overflowX: "scroll",
          }}
        >
          {ProCategory?.map((value, index) => {
            const { imgPath, categoryName } = value;
            return (
              <CategoryBox
                key={index}
                img={imgPath}
                name={categoryName}
                isPro={true}
              />
            );
          })}
        </Box>
      </Container>
      <Container sx={{ paddingBottom: 4 }}>
        <Box display={"flex"} justifyContent={"space-between"} padding={1}>
          <Typography
            fontSize={18}
            fontWeight={"bold"}
            padding={1}
            color={"#FF8B13"}
          >
            All Commodity Category
          </Typography>
          <Button>View All</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "nowrap",
            overflowX: "scroll",
          }}
        >
          {ComCategory?.map((value, index) => {
            const { imgPath, categoryName } = value;
            return (
              <CategoryBox
                key={index}
                img={imgPath}
                name={categoryName}
                isPro={false}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Home;

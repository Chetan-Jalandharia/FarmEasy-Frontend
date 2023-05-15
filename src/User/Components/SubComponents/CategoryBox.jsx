import { Box, Typography } from "@mui/material";
import React from "react";

const CategoryBox = ({ img, name, isPro }) => {
  console.log();
  // const folder = isPro ? "productCategory" : "commodityCategory";
  return (
    <>
      <Box
        borderRadius={2}
        margin={2}
        sx={{
          width: 180,
          minWidth: 160,
          height: 200,
          // padding: 1,
          backgroundImage: `url("${img}")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom 5px",
          boxShadow: 4,
        }}
      >
        <Box sx={{ bgcolor: "#C2DED1" }}>
          <Typography fontSize={22} fontWeight={"bold"} textAlign={"center"}>
            {name}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CategoryBox;

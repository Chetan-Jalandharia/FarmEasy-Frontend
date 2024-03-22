import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


const CategoryBox = ({ img, name, isPro }) => {

  let navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          boxShadow: "1px 1px 15px",
          borderRadius: "13px 13px 2px 2px"
        }}
        onClick={
          () => {
            isPro ?
              navigate("/product/showall") : navigate("/commodity/showall")
          }
        }
      >
        <Box
          sx={{
            borderRadius: "13px 13px 2px 2px",
            overflow: "hidden"
          }}
        >
          <Box
            sx={{
              width: 280,
              minWidth: 160,
              height: 280,
              backgroundImage: `url("${img}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              transition: "all 1s",
              "&:hover": {
                transform: "scale(1.3)",
              }
            }}
          >
          </Box>
        </Box>
        <Box sx={{ height: "40px", backgroundColor: "#9218f2", color: "white", borderRadius: "0px 0px 3px 3px" }}>
          <Typography fontSize={22} fontWeight={"bold"} textAlign={"center"}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CategoryBox;

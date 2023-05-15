import { Box, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const BoxAction = ({ value, linkTo }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: 150,
          maxWidth: 200,
          height: 120,
          backgroundColor: "#F6F6F6",
          color:"#a12cfa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          textAlign: "center",
          borderRadius: 2,
          boxShadow:4,
          flexGrow: 1,
          "&:hover": {
            backgroundColor: "#A66CFF",
            color: "#ECF2FF",
          },
        }}
        onClick={() => {
          navigate(linkTo);
        }}
      >
        <Typography fontSize={21} fontWeight={"bold"}>
          {value}
        </Typography>
      </Box>
    </>
  );
};

export default BoxAction;

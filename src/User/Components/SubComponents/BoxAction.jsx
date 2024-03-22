import { Box, Typography } from "@mui/material";
// import { common } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const BoxAction = ({ value, linkTo }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: 200,
          // maxWidth: 200,
          // maxHeight: 200,
          height: 200,
          backgroundImage: "linear-gradient(to top, #9218f2 0%, #9218f2 100%)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          textAlign: "center",
          borderRadius: "50%",
          boxShadow: 4,
          // flexGrow: 1,
          "&:hover": {
            backgroundImage:" radial-gradient(#667eea 0%, #764ba2 100%)",
            color: "#ECF2FF",
          }
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

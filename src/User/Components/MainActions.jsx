import { Container } from "@mui/material";
import React from "react";
import BoxAction from "./SubComponents/BoxAction";
const MainActions = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 3,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <BoxAction value={"Sell Product"} linkTo="/product/sell" />
        <BoxAction value={"Buy Product"} linkTo="/product/showall" />
        <BoxAction value={"Borrow Product"} linkTo="/product/showall" />
        <BoxAction value={"Sell Commodity"} linkTo="/commodity/sell" />
      </Container>
    </>
  );
};

export default MainActions;

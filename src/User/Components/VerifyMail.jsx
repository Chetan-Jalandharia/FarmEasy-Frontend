import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserApis from "../../api/UserApis";
import { Box, Button, Container } from "@mui/material";
import { Alert } from "../../Common/Alert";

const VerifyMail = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const id = queryParams.get("id");


  const handleVerify = () => {
    UserApis.verifyUser(id)
      .then((val) => {
        if (val.status === 200) {
          Alert.fire({
            icon: "success",
            title: "Email verified successfully",
          });
        }
      })
      .catch((err) => {
        Alert.fire({
          icon: "error",
          title: "Link expired",
        });
      });
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <Button size="large" onClick={handleVerify}>
            <h2>Click to verify</h2>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default VerifyMail;

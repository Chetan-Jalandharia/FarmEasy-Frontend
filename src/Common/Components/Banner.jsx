import { Container, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <>
      <Container>
        <div className="row mt-3">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center order-2 order-md-2">
            <div className="banner-text mt-1">
              <Typography fontSize={28} fontWeight={"bold"} color={"#EA592A"}>
                Start <span>Sharing</span> Machines
              </Typography>

              <Typography fontSize={30} fontWeight={"bold"} color={"#EA592A"}>
                <span>And</span> Build <span>FarmEasy</span>
              </Typography>
            </div>
          </div>

          <div className="col order-1 order-md-2 text-end">
            <img
              src="/farmers001.svg"
              height="100%"
              width="89%"
              alt="Farmer.PNG"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

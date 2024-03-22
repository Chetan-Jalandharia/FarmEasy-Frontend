import React from "react";
import { Container, Typography } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Banner() {
  return (
    <>


      <Carousel>
        <Carousel.Item>
          <div style={{ backgroundImage: "url('/img1.jpg')", backgroundPosition: "center", backgroundSize: "cover", height: "600px" }}>

            <Carousel.Caption>
              <h2>Welcome to FarmEasy</h2>
            </Carousel.Caption>
          </div>

        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundImage: "url('/img2.jpg')", backgroundPosition: "center", backgroundSize: "cover", height: "600px" }}>

            <Carousel.Caption>
              <h2>Welcome to FarmEasy</h2>
            </Carousel.Caption>

          </div>

        </Carousel.Item>
        <Carousel.Item>

          <div style={{ backgroundImage: "url('/img3.jpg')", backgroundPosition: "center", backgroundSize: "cover", height: "600px" }}>
            <Carousel.Caption>
              <h2>Welcome to FarmEasy</h2>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

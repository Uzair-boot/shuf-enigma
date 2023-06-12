import React from "react";
import { Box, Container } from "@mui/material";
import Swiperr from "./Swiperr";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MainTypography } from "./ServiceStyle";
import Footer from "../Footer/Footer";
import ServicesBox from "./ServicesBox";
import { Fade } from "react-reveal";

const Services = () => {
  return (
    <>
      <Box
        sx={{
          mt: "5%",
        }}
      >
        <Container>
          <Fade top>
            <MainTypography>SERVICES</MainTypography>
          </Fade>

          <ServicesBox />
          <Swiperr />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Services;

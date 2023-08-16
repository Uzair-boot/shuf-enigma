import React from "react";
import { Box, Container } from "@mui/material";
import Swiperr from "./Swiperr";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MainTypography } from "./ServiceStyle";
import Footer from "../Footer/Footer";
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <>
      <Box
        sx={{
          mt: "5%",
        }}
      >
        <Container>
          
            <MainTypography>SERVICES</MainTypography>
          

          <ServicesBox />
          <Swiperr />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Services;

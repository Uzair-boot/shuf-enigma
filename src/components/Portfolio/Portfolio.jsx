import React from "react";
import { Container, Box, Grid, useMediaQuery } from "@mui/material";
import { GenerelTypography } from "./PortfolioStyle";
import { portfolioContent } from "../utils/Utils";
import { HeaderTypography } from "../Contact/ContactStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import Footer from "../Footer/Footer";

export default function Portfolio() {
  const myfontsize = useMediaQuery("(max-width: 900px)");
  const matches = useMediaQuery("(max-width: 1400px)");

  return (
    <>
      <Box
        sx={{
          mt: "5%",
          mb: "5%",
        }}
      >
        <Container sx={{ mt: 4 }}>
         
            <HeaderTypography textAlign="center !important">
              OUR PORTFOLIO
            </HeaderTypography>
          

          {portfolioContent.map((i, index) => {
            if (index % 2) {
              return (
                <Grid
                  container
                  mt={5}
                  key={i}
                  textAlign="center"
                  spacing={12}
                  alignItems="center"
                >
                  <Grid item xs={12} md={12} lg={6}>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Box>
                    </Box>
                  </Grid>
                </Grid>
              );
            } else {
              return (
                <Grid
                  container
                  mt={5}
                  key={i}
                  textAlign="center"
                  spacing={12}
                  alignItems="center"
                >
                  <Grid item xs={12} md={12} lg={6}>
                    <Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    
                  </Grid>
                </Grid>
              );
            }
          })}
          <ScrollArrow />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

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
import { Slide, Fade } from "react-reveal";

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
          <Fade top>
            <HeaderTypography textAlign="center !important">
              OUR PORTFOLIO
            </HeaderTypography>
          </Fade>

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
                    <Slide left>
                      <Box>
                        <HeaderTypography>{i.name}</HeaderTypography>

                        <GenerelTypography>{i.desc}</GenerelTypography>
                      </Box>
                    </Slide>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Box>
                      <Slide right>
                        <Swiper
                          effect={"cards"}
                          grabCursor={true}
                          modules={[EffectCards]}
                          className="mySwiper"
                          loop={true}
                          style={{
                            width: myfontsize ? "70%" : "100%",
                            height: "100%",
                            transition: "1s",
                            "&:hover": { transform: "scale(1.5)" },
                          }}
                        >
                          {i.imgs.map((img) => {
                            return (
                              <Box key={img}>
                                <SwiperSlide
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    borderRadius: "18px",
                                  }}
                                >
                                  <img style={{ maxWidth: "100%" }} src={img} />
                                </SwiperSlide>
                              </Box>
                            );
                          })}
                        </Swiper>
                      </Slide>
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
                      <Slide left>
                        <Swiper
                          effect={"cards"}
                          grabCursor={true}
                          modules={[EffectCards]}
                          className="mySwiper"
                          loop={true}
                          style={{
                            width: myfontsize ? "60%" : "100%",
                            height: "100%",
                          }}
                        >
                          {i.imgs.map((img) => {
                            return (
                              <Box key={img}>
                                <SwiperSlide
                                  style={{
                                    borderRadius: "18px",
                                  }}
                                >
                                  <img style={{ maxWidth: "100%" }} src={img} />
                                </SwiperSlide>
                              </Box>
                            );
                          })}
                        </Swiper>
                      </Slide>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <Slide right>
                      <Box>
                        <HeaderTypography>{i.name}</HeaderTypography>

                        <GenerelTypography>{i.desc}</GenerelTypography>
                      </Box>
                    </Slide>
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

import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { HeaderTypography, GenerelTypography, AboutButton } from "./HomeStyle";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Technologies from "./Technologies";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import background from "../../assets/Home/bg.jpg";

export default function Home() {
  const largeScreen = useMediaQuery("(min-width: 1200px)");
  const myfontsize = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <Box
        sx={{
          mt: "5%",
        }}
      >
        <Container>
          <Grid container alignItems="center" marginBottom={10}>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                textAlign: "center",
              }}
            >
              <Box>
                <HeaderTypography
                  myfontsize={myfontsize}
                  color="#116D6E !important"
                  lineHeight="normal"
                >
                  Empowering Innovation
                </HeaderTypography>
                <HeaderTypography
                  myfontsize={myfontsize}
                  color="#4E3636 !important "
                >
                  Through Seamless Software Solutions
                </HeaderTypography>
                <Box px={4}>
                  <GenerelTypography
                    sx={{
                      textAlign: largeScreen
                        ? "justify !important"
                        : "center !important",
                    }}
                  >
                    We are a leading software company specializing in innovative
                    solutions for businesses. With a customer-centric approach
                    and cutting-edge technology, we help organizations embrace
                    digital transformation to achieve their goals.
                  </GenerelTypography>
                </Box>
                <AboutButton>
                  <NavLink
                    to="/contactus"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    Contact Us
                  </NavLink>
                </AboutButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={background}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>

          <Technologies />
          <Features />
          <Box my="5%">
            <Testimonial />
          </Box>
          <ScrollArrow />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

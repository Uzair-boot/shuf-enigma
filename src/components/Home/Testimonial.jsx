import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import { HeaderTypography, MidTypography, TestBox } from "./HomeStyle";
import CountUp from "react-countup";
import { TestimonialCards } from "../utils/Utils";
import { Bounce, Fade } from "react-reveal";

export default function Testimonial() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  let bounceArray = ["left", "right", "left", "right"];

  return (
    <>
      <Container>
        <Box>
          <Fade right>
            <HeaderTypography
              myfontsize={myfontsize}
              textAlign="center !important"
            >
              TESTIMONIALS
            </HeaderTypography>
          </Fade>
        </Box>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Fade left>
              <Box>
                <Carousel />
              </Box>
            </Fade>
          </Grid>
        </Grid>

        <Grid container mt={5} spacing={5}>
          {TestimonialCards.map((item, i) => {
            return (
              <Grid item key={item} xs={12} md={6} lg={6}>
                <Fade
                  left={bounceArray[i] === "left" && true}
                  right={bounceArray[i] === "right" && true}
                >
                  <TestBox>
                    <Box mt={3}>
                      <MidTypography color="white !important">
                        <CountUp end={item.countEnd} />
                      </MidTypography>
                    </Box>
                    <Box>
                      <Typography fontSize="25px"> {item.title} </Typography>
                    </Box>
                  </TestBox>
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

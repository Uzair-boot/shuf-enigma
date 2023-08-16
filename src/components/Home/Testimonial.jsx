import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import { HeaderTypography, MidTypography, TestBox } from "./HomeStyle";
import CountUp from "react-countup";
import { TestimonialCards } from "../utils/Utils";

export default function Testimonial() {
  const myfontsize = useMediaQuery("(max-width: 900px)");



  return (
    <>
      <Container>
        <Box>
          
            <HeaderTypography
              myfontsize={myfontsize}
              textAlign="center !important"
            >
              TESTIMONIALS
            </HeaderTypography>
          
        </Box>
        <Grid container>
          <Grid item xs={12} lg={12}>
            
              <Box>
                <Carousel />
              </Box>
            
          </Grid>
        </Grid>

        <Grid container mt={5} spacing={5}>
          {TestimonialCards.map((item, i) => {
            return (
              <Grid item key={item} xs={12} md={6} lg={6}>
                
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
                
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

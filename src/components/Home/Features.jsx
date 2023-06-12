import { Box, Container, Divider, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import {
  HeaderTypography,
  GenerelTypography,
  FeatureBox,
  MidTypography,
} from "./HomeStyle";
import { homeFeature } from "../utils/Utils";
import Fade from "react-reveal";

export default function Features() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  let fadeArray = ["left", "bottom", "right", "right", "top", "left"];

  return (
    <>
      <Box my={5}>
        <Container>
          <Grid container>
            <Grid item xs={2} lg={2}></Grid>
            <Grid xs={8} lg={8} textAlign="center">
              <Box>
                <Fade right>
                  <HeaderTypography myfontsize={myfontsize}>
                    OUR AWSOME FEATURES
                  </HeaderTypography>
                </Fade>
                <Fade left>
                  <GenerelTypography textAlign="center !important">
                    We develop integrated marketing solutions that drive
                    business and boost revenue. We don’t need to outsource your
                    work overseas or to robots. We are real people, with a real
                    passion for what we do.
                  </GenerelTypography>
                </Fade>
              </Box>
            </Grid>
            <Grid item xs={2} lg={2}></Grid>
          </Grid>

          <Grid container mt={5} spacing={5}>
            {homeFeature.map((i, index) => {
              return (
                <Grid key={i} item xs={12} md={6} lg={4}>
                  <Fade
                    left={fadeArray[index] === "left" && true}
                    top={fadeArray[index] === "top" && true}
                    right={fadeArray[index] === "right" && true}
                    bottom={fadeArray[index] === "bottom" && true}
                  >
                    <FeatureBox>
                      <Box textAlign="center">
                        <Box> {i.img} </Box>
                        <Box>
                          {" "}
                          <MidTypography myfontsize={myfontsize}>
                            {" "}
                            {i.name}{" "}
                          </MidTypography>
                        </Box>
                      </Box>
                      <Divider />
                      <Box py="10%" px="0%">
                        <GenerelTypography>{i.desc}</GenerelTypography>
                      </Box>
                    </FeatureBox>
                  </Fade>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
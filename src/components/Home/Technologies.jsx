import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { GenerelTypography, HeaderTypography, TechBox } from "./HomeStyle";
import { Technology } from "../utils/Utils";
import Fade from "react-reveal";

export default function Technologies() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  let fadeArray = [
    "left",
    "top",
    "right",
    "right",
    "bottom",
    "left",
    "left",
    "top",
    "right",
  ];

  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={2} lg={2}></Grid>
            <Grid item xs={8} lg={8} textAlign="center">
              <Box>
                <Fade right>
                  <HeaderTypography myfontsize={myfontsize}>
                    WHAT WE BUILD
                  </HeaderTypography>
                </Fade>

                <Fade left>
                  <GenerelTypography>
                    We make your online visibility possible through a custom
                    build website, which is compulsory for your business
                    promotion. Our professional custom web design services are
                    ultimate options to make your business a brand in the
                    digital world. Unique and amazing designs are at the core of
                    The Custom Website. We know this fact that creativity is
                    essential factor in designing. Our work attract more and
                    more customers to your website. In this way, you will be
                    able to present your business in a professional way.
                  </GenerelTypography>
                </Fade>
              </Box>
            </Grid>
            <Grid item xs={2} lg={2}></Grid>
          </Grid>

          <Grid container>
            {Technology.map((i, index) => {
              return (
                <Grid key={i} my={2} item lg={4} md={6} xs={6}>
                  <Fade
                    left={fadeArray[index] === "left" && true}
                    top={fadeArray[index] === "top" && true}
                    right={fadeArray[index] === "right" && true}
                    bottom={fadeArray[index] === "bottom" && true}
                  >
                    <TechBox>
                      <Box>
                        {" "}
                        <img
                          style={{ maxWidth: "100%" }}
                          src={i.img}
                          alt=""
                        />{" "}
                      </Box>
                      <Box mt={3}> {i.name} </Box>
                    </TechBox>
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

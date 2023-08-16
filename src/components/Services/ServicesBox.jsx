import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { GenerelTypography } from "../Home/HomeStyle";
import bg from "../../assets/services/bg.png";
import { ServiceTypography } from "./ServiceStyle";


const ServicesBox = () => {
  const largeScreen = useMediaQuery("(min-width: 1200px)");
  const myfontsize = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <Box my="5%">
        <Container>
          <Grid container alignItems="center">
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                textAlign: "center",
              }}
            >
              
                <Box mb="5%">
                  <ServiceTypography
                    myfontsize={myfontsize}
                    color="black !important"
                  >
                    At
                    <span
                      style={{
                        color: "#184E93",
                        fontWeight: "bolder",
                        marginLeft: "1%",
                      }}
                    >
                      QUH
                    </span>
                    <span
                      style={{
                        color: "#79B5D9",
                        fontWeight: "bolder",
                        marginLeft: "1%",
                      }}
                    >
                      Dock
                    </span>
                    , We Offer
                  </ServiceTypography>
                  <Box px={4}>
                    <GenerelTypography
                      sx={{
                        textAlign: largeScreen
                          ? "justify !important"
                          : "center !important",
                      }}
                    >
                      Cutting-edge technology and enterprise solutions for
                      solving real-world problems and help businesses become
                      bigger & better.
                    </GenerelTypography>
                  </Box>
                </Box>
              
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                
                  <img
                    style={{
                      width: "70%",
                      marginLeft: "15%",
                    }}
                    src={bg}
                    alt=""
                  />
                
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ServicesBox;

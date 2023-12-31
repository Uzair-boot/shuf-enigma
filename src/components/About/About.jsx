import { Box, Grid, Container, useMediaQuery } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderTypography,
  GenerelTypography,
  AboutBox,
  AboutTypography,
  AboutButton,
  AboutGenerelTypography,
} from "../Contact/ContactStyle";
import Footer from "../Footer/Footer";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import { aboutUs } from "../utils/Utils";
import Goals from "./Goals";

export default function About() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Box
        sx={{
          mt: "5%",
          mb: "5%",
        }}
      >
        <Container>
          <Box mt={5} textAlign="center">
            
              <HeaderTypography myfontsize={myfontsize}>
                ABOUT US
              </HeaderTypography>
            
          </Box>
          {aboutUs.map((i, index) => {
            if (index % 2) {
              return (
                <Grid
                  container
                  mt={2}
                  key={i}
                  textAlign="center"
                  spacing={5}
                  alignItems="center"
                >
                  <Grid item xs={12} md={12} lg={6}>
                    
                      <Box>
                        <HeaderTypography myfontsize={myfontsize}>
                          {i.ourHead}
                        </HeaderTypography>

                        <GenerelTypography>{i.desc}</GenerelTypography>
                      </Box>
                    
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    
                      <Box>
                        <img
                          style={{ maxWidth: "100%", width: "80%" }}
                          src={i.ourImage}
                          alt="about Us Image"
                        />
                      </Box>
                    
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Goals />
                  </Grid>
                </Grid>
              );
            } else {
              return (
                <>
                  <Grid
                    container
                    mt={2}
                    key={i}
                    textAlign="center"
                    spacing={5}
                    alignItems="center"
                  >
                    <Grid item xs={12} md={12} lg={6}>
                      
                        <Box>
                          <img
                            style={{ maxWidth: "100%", width: "80%" }}
                            src={i.ourImage}
                            alt="Contact Us Image"
                          />
                        </Box>
                      
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      
                        <Box>
                          <HeaderTypography myfontsize={myfontsize}>
                            {i.ourHead}
                          </HeaderTypography>

                          <GenerelTypography>{i.desc}</GenerelTypography>
                        </Box>
                      
                    </Grid>
                  </Grid>

                  <AboutBox mt={5}>
                    <Grid container>
                      <Grid item xs={12} md={6} lg={6}>
                      </Grid>

                      <Grid item xs={12} md={6} lg={6}>
                        <NavLink
                          to="/contactus"
                          style={({ isActive }) => ({
                            textDecoration: "none",
                            color: isActive ? "#79B5D9" : "#000000",
                          })}
                        >
                        </NavLink>
                      </Grid>
                    </Grid>
                  </AboutBox>
                  <ScrollArrow />
                </>
              );
            }
          })}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

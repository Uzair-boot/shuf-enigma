import React from "react";
import { Container, Grid, Box, Typography, useMediaQuery } from "@mui/material";
import contact from "../../assets/contact-us/contact.png";
import {
  HeaderTypography,
  MidTypography,
  GenerelTypography,
} from "./ContactStyle";
import Form from "./Form";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
import Footer from "../Footer/Footer";

export default function Contact() {
  const myfontsize = useMediaQuery("(max-width: 1200px)");
  const matches = useMediaQuery("(max-width: 1400px)");

  return (
    <>
      <Container>
        
          <Box
            sx={{
              mt: "7%",
              mb: "5%",
            }}
          >
            <HeaderTypography
              myfontsize={myfontsize}
              textAlign="center !important"
            >
              CONTACT US FOR EXPERT ADVICE
            </HeaderTypography>
          </Box>
        

        <Grid
          container
          mt={2}
          textAlign="center"
          spacing={5}
          alignItems="center"
        >
          <Grid item xs={12} md={12} lg={6}>
            
              <Box>
                <img
                  style={{ maxWidth: myfontsize ? "80%" : "100%" }}
                  src={contact}
                  alt="Contact Us Image"
                />
              </Box>
            
          </Grid>

          <Grid item xs={12} md={12} lg={6}>
            
              <Box>
                <HeaderTypography myfontsize={myfontsize}>
                  HOW WE CAN HELP
                </HeaderTypography>

                <GenerelTypography fontsize={myfontsize}>
                  We develop high-quality and integrated marketing solutions
                  that drive businesses and boost revenue. Whatever environment
                  you’re working in, or wherever your project is located, we are
                  here to help and offer you a solution.
                </GenerelTypography>
              </Box>
            
          </Grid>
        </Grid>

        <Grid mt={7} textAlign="center">
          <Box>

          </Box>

          <Box p="10%">
            <Form />
          </Box>
        </Grid>
        <ScrollArrow />
      </Container>
      <Footer />
    </>
  );
}

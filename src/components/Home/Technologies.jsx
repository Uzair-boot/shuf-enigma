import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { GenerelTypography, HeaderTypography, TechBox } from "./HomeStyle";
import { Technology } from "../utils/Utils";

export default function Technologies() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={2} lg={2}></Grid>
            <Grid item xs={8} lg={8} textAlign="center">
              <Box>
                <HeaderTypography color="#4E3636" myfontsize={myfontsize}>
                  Blueprints to Beyond
                </HeaderTypography>

                <GenerelTypography>
                  we help organizations embrace digital transformation to
                  achieve their goals. Join us for the latest updates on our
                  projects, expertise, and industry insights. Let's shape the
                  future of software together!
                </GenerelTypography>
              </Box>
            </Grid>
            <Grid item xs={2} lg={2}></Grid>
          </Grid>

          <Grid container>
            {Technology.map((i, index) => {
              return (
                <Grid key={index} my={2} item lg={4} md={6} xs={6}>
                  <TechBox>
                    <React.Fragment style={{ height: "150px", width: "150px" }}>
                      {i.img}
                    </React.Fragment>
                    <Box mt={3}> {i.name} </Box>
                  </TechBox>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

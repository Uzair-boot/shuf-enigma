import React from "react";
import SwiperCard from "./SwiperCard";
import { portfolioContent } from "../utils/Utils";
import { Container, Box, Grid, Typography, useMediaQuery } from "@mui/material";

export default function SingleSlide() {
  const myfontsize = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Grid container textAlign="center" spacing={12} alignItems="center">
        <Grid item xs={12} md={12} lg={6}>
          <Box>
            <SwiperCard />
          </Box>
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          {portfolioContent.map((i) => (
            <Box key={i}>
              <Typography
                sx={{
                  fontSize: myfontsize ? "20px" : "52px",
                  fontWeight: 700,
                  mb: "5%",
                  color: "#79B5D9",
                }}
              >
                {i.name}
              </Typography>
              <Typography
                sx={{
                  textAlign: "justify",
                }}
              >
                {i.desc}{" "}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

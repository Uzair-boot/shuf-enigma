import React from "react";
import { GoalTypography1, GoalTypography2 } from "../Contact/ContactStyle";
import { AboutGenerelTypography, GoalsBox, ItemGrid } from "./AboutStyle";
import { goals } from "../utils/Utils";
import { useMediaQuery, Grid, Box } from "@mui/material";

export default function Goals() {
  const myfontsize = useMediaQuery("(max-width: 900px)");
  let bounceArray = ["left", "left", "right", "right"];
  return (
    <>
      <GoalsBox>


        <Grid container>
          {goals.map((i, index) => (
            <ItemGrid item xs={12} md={6} lg={3} my="6%" key={i}>
              
                <Box>
                  <img src={i.img} alt="Image" />
                  <AboutGenerelTypography>{i.desc}</AboutGenerelTypography>
                </Box>
              
            </ItemGrid>
          ))}
        </Grid>
      </GoalsBox>
    </>
  );
}

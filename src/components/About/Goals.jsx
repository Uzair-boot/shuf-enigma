import React from "react";
import { GoalTypography1, GoalTypography2 } from "../Contact/ContactStyle";
import { AboutGenerelTypography, GoalsBox, ItemGrid } from "./AboutStyle";
import { goals } from "../utils/Utils";
import { useMediaQuery, Grid, Box } from "@mui/material";
import { Slide, Fade } from "react-reveal";

export default function Goals() {
  const myfontsize = useMediaQuery("(max-width: 900px)");
  let bounceArray = ["left", "left", "right", "right"];
  return (
    <>
      <GoalsBox>
        <Slide top>
          <GoalTypography1 myfontsize={myfontsize}>OUR GOALS</GoalTypography1>
          <GoalTypography2 myfontsize={myfontsize}>
            Our goals are directly related to your results
          </GoalTypography2>
        </Slide>

        <Grid container>
          {goals.map((i, index) => (
            <ItemGrid item xs={12} md={6} lg={3} my="6%" key={i}>
              <Fade
                left={bounceArray[index] === "left" && true}
                right={bounceArray[index] === "right" && true}
                bottom={bounceArray[index] === "bottom" && true}
                top={bounceArray[index] === "top" && true}
              >
                <Box>
                  <img src={i.img} alt="Image" />
                  <AboutGenerelTypography>{i.desc}</AboutGenerelTypography>
                </Box>
              </Fade>
            </ItemGrid>
          ))}
        </Grid>
      </GoalsBox>
    </>
  );
}

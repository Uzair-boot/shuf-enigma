import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Slider from "./Dinner/Carousel";
import Swiperr from "./Events/Swiper";
import { HeadingTypography } from "./StyledComponet";
import ScrollArrow from "../ScrollArrow/ScrollArrow";

const QuhDock_life = () => {
  return (
    <Box>
      <Container>
        <Box>
          <HeadingTypography variant="h4">
            Histroy Of QUH Dock
          </HeadingTypography>
          <Box sx={{ my: "3%" }}>
            <video
              // id="my-player"
              controls
              muted
              autoPlay={"autoplay"}
              preLoad="auto"
              loop
              style={{ width: "100%" }}
            >
              <source
                src="//vjs.zencdn.net/v/oceans.mp4"
                type="video/mp4"
              ></source>
            </video>
          </Box>

          {/* Company Events */}
          <Box>
            <HeadingTypography variant="h4">Company Events</HeadingTypography>
            <Swiperr />
          </Box>
          <Divider />

          {/* Company Dinners */}
          <Box>
            <HeadingTypography variant="h4">Company Dinners</HeadingTypography>
            <Slider />
          </Box>
        </Box>
      <ScrollArrow />
      </Container>
      <Footer />
    </Box>
  );
};

export default QuhDock_life;

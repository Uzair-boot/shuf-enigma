import React, { useEffect, useState } from "react";
import DrawerMui from "./Drawer";
import { Box, Grid, useMediaQuery, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { headerContent } from "../utils/Utils";
import logo from "../../assets/logo.png";
import "../../App.css";

export default function Header() {
  const myDisplay = useMediaQuery("(max-width: 900px)");

  return (
    <Box
      id="header"
      style={{
        background: "#FFFFFF",
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "2",
      }}
    >
      <Container>
        <Box
          sx={{
            alignItems: "center",
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
          }}
        >
          <Box flexGrow="1" mt="1%">
            <NavLink to="/">
              <img
                style={{ maxWidth: "100%", width: "10%" }}
                src={logo}
                alt=""
              />
            </NavLink>
          </Box>
          <Box sx={{}}>
            <DrawerMui data={headerContent} />
          </Box>
        </Box>

        <Grid
          container
          // align='center'
          sx={{ alignItems: "center", pt: "1%" }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sx={{ display: { sm: "none", xs: "none", md: "block" } }}
          >
            <NavLink to="/">
              <img
                style={{ maxWidth: "100%", width: "17%" }}
                src={logo}
                alt="logo"
              />
            </NavLink>
          </Grid>

          <Grid item lg={8} md={8}>
            <Box
              sx={{
                display: myDisplay
                  ? { sm: "none", xs: "none", md: "block" }
                  : "flex",
                cursor: "pointer",
                justifyContent: "space-around",
              }}
            >
              {headerContent.map((item) => {
                let string = item.replace(/\s+/g, "").trim();
                let sentence = string.toLowerCase();
                return (
                  <Box key={item}>
                    <NavLink
                      to={sentence}
                      smooth
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        color: isActive ? "#79B5D9" : "#000000",
                      })}
                    >
                      {item}
                    </NavLink>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

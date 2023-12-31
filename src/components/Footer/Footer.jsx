import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { footerContent } from "./FooterItem";
import crop from "../../assets/footerlogo.png";
import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  FollowInnerTypography,
  HeadingTypography,
  InnerBox,
  InnerTypography,
} from "./FooterStyle";
import { SharedLogowhite } from "../utils/sharedLogo";

const Footer = () => {
  return (
    <>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="#0d3256">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavLink to="/">
                {/* <img
                  style={{
                    maxWidth: "60%",
                    borderRadius: "110px",
                  }}
                  src={crop}
                  alt="logo"
                /> */}
                <Box className="image-container">
                  <SharedLogowhite />
                </Box>
              </NavLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box>
              <HeadingTypography>COMPANY</HeadingTypography>
              {footerContent.map((item) => {
                let string = item.replace(/\s+/g, "").trim();
                let sentence = string.toLowerCase();
                return (
                  <InnerBox key={item}>
                    <NavLink
                      to={"/" + sentence}
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      {item}
                    </NavLink>
                  </InnerBox>
                );
              })}
            </Box>
          </Grid>

          <Grid item sx={12} sm={3}>
            <Box>
              <HeadingTypography>Follow Us</HeadingTypography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box>
                  <a
                    href="https://www.linkedin.com/company/shuf-co"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedIn
                      style={{
                        fontSize: "35px",
                        color: "#FFFFFF",
                      }}
                    ></LinkedIn>
                  </a>
                </Box>

                <Box ml="15%">
                  <a href="#" rel="noreferrer" target="_blank">
                    <FacebookRounded
                      style={{
                        fontSize: "35px",
                        color: "#FFFFFF",
                      }}
                    />
                  </a>
                </Box>

                <Box ml="15%">
                  <a
                    href="https://twitter.com/co_shuf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TwitterIcon
                      style={{
                        marginLeft: "15%",
                        fontSize: "35px",
                        color: "#FFFFFF",
                      }}
                    />
                  </a>
                </Box>
              </Box>

              {/* <Box>
                <InnerTypography>
                  28 Walton، Malik Tower - 4th Floor، <br /> 1st Office, Cavalry
                  Ground, Lahore, <br /> Punjab 54000
                </InnerTypography>
                <FollowInnerTypography>
                  1309 Coffeen Avenue STE 1200 <br /> Sheridan, WY 82801
                </FollowInnerTypography>
              </Box> */}
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box>
              <HeadingTypography>CONTACT Us</HeadingTypography>
              <Box>
                <InnerTypography>
                  PK: +(92) 328-8781-206 <br />
                  UK: +(44) 7475-479995 <br />
                  <a
                    href="mailto:info@quhdock.com"
                    rel="noreferrer"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    Mail: info@quhdock.com
                  </a>
                </InnerTypography>
              </Box>
              {/* <Box marginTop="3%">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0208548462433!2d74.37262891560472!3d31.49611058137775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919052e7d3be139%3A0xd0101498ebbc5c85!2sQUH%20Dock!5e0!3m2!1sen!2s!4v1650280692498!5m2!1sen!2s"
                  width="100%"
                  height="25%"
                  style={{
                    border: "0",
                    borderRadius: "11px",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                  }}
                ></iframe>
              </Box> */}
            </Box>
          </Grid>
        </Grid>
        <Divider
          sx={{
            mt: "1%",
          }}
        />

        <Box
          sx={{
            textAlign: "center",
            pt: { xs: 2, sm: 5 },
            color: "#ffffff",
          }}
        >
          &copy; {new Date().getFullYear()} QUH Dock all Rights Reserved.
        </Box>
      </Box>
    </>
  );
};

export default Footer;

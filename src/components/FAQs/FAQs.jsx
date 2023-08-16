import React from "react";
import { useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Container, useMediaQuery } from "@mui/material";
import {
  AccordionSummaryTag,
  AccordionTag,
  HeadingBox,
  HeadingTypography,
  QuestionTypography,
} from "./styleFAQ";
import { QuestionAns } from "./QuestionAns";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../Footer/Footer";

export default function FAQs() {
  const match = useMediaQuery("(max-width: 900px)");
  const matches = useMediaQuery("(max-width: 1400px)");


  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          mt: "5%",
          mb: "5%",
        }}
      >
        <Container>
          {/* heading box */}
          <HeadingBox>
            
              <HeadingTypography>
                <span style={{ color: "#21518E" }}>YOU HAVE</span>
                <span style={{ color: "#82B3D7" }}> QUESTIONS?</span>
              </HeadingTypography>
            
            
              <Typography fontSize="20px">
                And we have got answers to all of them.
              </Typography>
            
          </HeadingBox>

          {/* Accordion */}

          <Box sx={{ px: match ? "2%" : "20%" }}>
            {QuestionAns.map((item, index) => (
              <Box key={item}>
                
                  <AccordionTag
                    expanded={expanded === `panel_${index}`}
                    onChange={handleChange(`panel_${index}`)}
                  >
                    <AccordionSummaryTag
                      expandIcon={
                        <AddIcon style={{ stroke: "black", strokeWidth: 1 }} />
                      }
                    >
                      <QuestionTypography>{item.que}</QuestionTypography>
                    </AccordionSummaryTag>
                    <AccordionDetails className="AccSumTag">
                      <Typography fontSize="15px">{item.ans}</Typography>
                    </AccordionDetails>
                  </AccordionTag>
                
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

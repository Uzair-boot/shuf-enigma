import {
  Accordion,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";

export const HeadingTypography = styled(Typography)`
  font-weight: 700;
  font-size: 52px;
  margin-bottom: 1%;
`;
export const QuestionTypography = styled(Typography)`
  // color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const AccordionTag = styled(Accordion)`
  background-color: rgb(235, 242, 244);
  // border-radius: 15px;
`;

export const AccordionSummaryTag = styled(AccordionSummary)`
  background-color: rgb(169, 199, 217);
  margin-top: 2%;
  // border-radius: 15px;
`;

export const HeadingBox = styled(Box)`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
`;

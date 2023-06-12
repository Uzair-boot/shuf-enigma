import { styled } from "@mui/material/styles";
import { Typography, Box, Grid } from "@mui/material";

export const MidTypography = styled(Typography)`
  font-size: 40px;
  font-weight: 500;
  color: #184e93;
`;

export const GoalsBox = styled(Box)`
  text-align: center;
  background-color: #184e93;
  align-items: center;
  padding-top: 3%;
  padding-right: 10%;
  padding-left: 10%;
`;
export const SubBox = styled(Box)`
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    margin-top: 5%;
    font-size: myfontsize ? 52px : 27px;

`;
export const InnerBox = styled(Box)`
  padding: 4%;
`;

export const AboutGenerelTypography = styled(Typography)`
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
  color: #ffffff;
`;

export const ItemGrid = styled(Grid)`
  align-items: baseline;
`;

export const AboutBox = styled(Box)`
  text-align: center;
  background-color: #184e93;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 6%;
  padding-bottom: 6%;
`;

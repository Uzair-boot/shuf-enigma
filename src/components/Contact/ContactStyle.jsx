import { styled } from "@mui/material/styles";
import {
  Button,
  TextField,
  Typography,
  Box,
  TextareaAutosize,
} from "@mui/material";

export const HeaderTypography = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "25px" : "52px")};
  font-weight: 700;
  color: #184e93;
`;

export const MidTypography = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "20px" : "40px")};
  font-weight: 500;
  color: #184e93;
`;

export const SubmitButton = styled(Button)`
  color: #ffffff;
  width: 40%;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 2%;
  font-weight: bold;
  background-color: #184e93;
  &:hover {
    background-color: #82b3d7;
  }
`;

export const TextFields = styled(TextField)`
  margin-top: 2%;
  margin-bottom: 2%;
  /* padding-right: 4%; */
  /* padding-left: 4%; */
`;

export const TextareaAutosizes = styled(TextareaAutosize)`
  margin-top: 2%;
  margin-bottom: 2%;
`;
export const GenerelTypography = styled(Typography)`
  padding-left: 4%;
  padding-right: 4%;
  text-align: justify;
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
export const AboutTypography = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "18px" : "30px")};
  font-weight: ${({ myfontsize }) => (myfontsize ? "400" : "500")};
  color: #ffffff;
  text-align: center;
`;
export const AboutButton = styled(Button)`
  color: #184e93;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 4%;
  font-weight: bold;
  background-color: #ffffff;
  &:hover {
    background-color: #184e93;
    color: #ffffff;
  }
`;
export const AboutGenerelTypography = styled(Typography)`
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
`;

export const GoalsBox = styled(Box)`
  text-align: center;
  background-color: #184e93;
  align-items: center;
  padding-top: 6%;
  padding-bottom: 6%;
`;
export const GoalTypography1 = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "25px" : "45px")};
  font-weight: 600;
  color: #ffffff;
`;

export const GoalTypography2 = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "20px" : "30px")};
  font-weight: ${({ myfontsize }) => (myfontsize ? "700" : "400")};
  color: #ffffff;
`;

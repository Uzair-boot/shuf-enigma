import { styled } from "@mui/material/styles";
import { Button, TextField, Typography, TextareaAutosize } from "@mui/material";

export const HeaderTypography = styled(Typography)`
  font-size: 52px;
  font-weight: 700;
  color: #184e93;
`;

export const MidTypography = styled(Typography)`
  font-size: 40px;
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
  padding-left: 2%;
  padding-right: 2%;
  text-align: justify;
`;

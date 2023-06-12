import { Box, Grid, styled } from "@mui/material";

export const MainBox = styled(Box)`
border: 1px solid #CBD5E0;
background:#5893C8;
width: 80%;
height: 80%;
cursor: pointer;
transition: 1s;
box-shadow: 0px 0px 10px 4px #CBD5E0;
border-radius: 10px;
&:hover {
 background-color: #CBD5E0;
 transition: all 0.2s ease-out;
   box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
   top: -4px;
   border: 1px solid #cccccc;
border-left: 5px solid #184E93; 
background-color: white;
`;

export const TextGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

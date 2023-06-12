import { Box, Grid, styled } from "@mui/material";

// export const MainBox = styled(Box)`
//   border: 1px solid #CBD5E0;
//   border-radius: 15px;
//   &:hover {
//   background-color: #CBD5E0;
//   // transition: all 0.2s ease-out;
//   //   box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
//     // top: -4px;
//     // border: 1px solid #cccccc;
//   border-left: 4px solid #184E93;
//   border-bottom: 4px solid #184E93;
//   background-color: white;
// `;

export const MainBox = styled(Box)`
transition: transform .3s;
&:hover {
    -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 
border-radius:25px;
`;

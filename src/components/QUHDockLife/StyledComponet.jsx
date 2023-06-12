import { Box, styled, Typography } from "@mui/material";

export const HeadingTypography = styled(Typography)`
  font-weight: 700;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;
export const CloseButton = styled(Box)`
// border: 1px solid #CBD5E0;
background-color: #114d94;
cursor: pointer;
border-radius: 10px;
// &:hover {
//     background-color: #114d94;
//     transition: width 2s, height 2s;
//     width:27px;
//     height:27px;
    
`;
export const MainBox = styled(Box)`
transition: transform .3s;
&:hover {
    -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2); 

`;

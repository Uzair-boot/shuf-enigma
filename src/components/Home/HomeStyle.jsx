import { Button, Grid, Typography, Box, styled } from "@mui/material";

export const MainBox = styled(Box)`
  padding: 10% 0%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
`;

export const MainTypography = styled(Typography)`
  font-weight: 700;
  font-size: ${({ myfontsize }) => (myfontsize ? "20px" : "52px")};
  color: #114d94;
`;

export const SubTypography = styled(Typography)`
  font-weight: 700;
  font-size: ${({ myfontsize }) => (myfontsize ? "20px" : "52px")};
  color: #79b5d9;
`;

export const ContactButton = styled(Button)`
  background-color: #114d94;
  color: #ffffff;
  padding: 1.5% 3%;
  margin: 4% 0%;
  &:hover {
    background-color: #114d94a1;
  }
`;

export const HeaderTypography = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "20px" : "52px")};
  font-weight: 700;
`;
export const GenerelTypography = styled(Typography)`
  padding-left: 4%;
  padding-right: 4%;
  text-align: justify;
`;

export const AboutButton = styled(Button)`
  color: #ffffff;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-left: 3%;
  padding-right: 3%;
  margin-top: 4%;
  font-weight: bold;
  background-color: #116d6e;
  &:hover {
    background-color: #4e3636;
    color: #black;
  }
`;

export const MyGrid = styled(Grid)`
  display: block;
`;

export const FeatureBox = styled(Box)`
  border: 1px solid #cbd5e0;
  border-radius: 10px;
  padding-top: 10%;
  padding-bottom: 10%;
  border-top: 7px solid #116d6e;
  border-bottom: 7px solid #4e3636;
  // width: 100%;
  // background-color: #4e3636;
  height: 300px;
  box-shadow: 0px 0px 10px 1px #cbd5e0;
  &:hover {
    background-color: #f0f0f0;
    transition: 1s;
  }
`;

export const MidTypography = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "18px" : "30px")};
  font-weight: 500;
  color: #184e93;
`;

// export const TechBox = styled(Box)`
//   //    border: 1px solid #CBD5E0;
//   width: 80%;
//   height: 130px;
//   text-align: center;
//   padding: 5%;
//   margin-top: 6%;
//   transition: 1s;
//   box-shadow: 0px 0px 10px 4px #cbd5e0;
//   border-radius: 10px;
//   transition: all 0.2s ease-out;
//   &:hover {
//     transform: "scale(0.9)";
//     // boxShadow: '0px 0px 10px 4px #cbd5e0';
//     // background-color: #cbd5e0;
//     // box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
//     // // top: -4px;
//     // border: 1px solid #cccccc;
//     // border-left: 4px solid #184e93;
//     // background-color: white;
//   }
// `;

export const TechBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "#1F1817",
  color: "white",
  cursor: "pointer",
  height: "170px",
  width: "85%",
  textAlign: "left",
  boxShadow: "0px 0px 2px 1px #cbd5e0",
  borderRadius: "10px",
  border: "1px solid #cbd5e0",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(0.9)",
    boxShadow: "0px 0px 10px 4px #cbd5e0",
  },
}));

export const TestBox = styled(Box)`
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 5%;
  // margin-top: 6%;
  transition: 1s;
  box-shadow: 0px 0px 10px 4px #cbd5e0;
  border-radius: 10px;
  &:hover {
  }
`;

export const TestiTypo = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
`;

export const CompanyTypo = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`;

export const TestiCard = styled(Box)`
border: 1px solid #CBD5E0;
width: 80%;
height: 80%;
cursor: pointer;
text-align: center;
padding: 5%;
margin-top: 6%;
transition: 1s;
box-shadow: 0px 0px 10px 4px #CBD5E0;
border-radius: 10px;
&:hover {
 background-color: #CBD5E0;
 transition: all 0.2s ease-out;
   box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
   top: -4px;
   border: 1px solid #cccccc;
 border-left: 4px solid #4e3636; 
   background-color: white;
`;

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainTypography = styled(Typography)`
  font-size: 52px;
  font-weight: 700;
  color: #114d94;
  text-align: center;
`;
export const SwiperTypography = styled(Typography)`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-weight: 700;
  color: #184e93;
  margin-top: 9%;
  margin-bottom: 7%;
`;

export const SwiperInnerTypography = styled(Typography)`
  font-weight: 300;
  font-size: 12px;
`;

export const ServiceTypography = styled(Typography)`
  font-size: ${({ myfontsize }) => (myfontsize ? "20px" : "35px")};
  font-weight: 700;
  color: #184e93;
`;

export const ServiceInnerTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  font-size: ${({ matches }) => (matches ? "52px" : "25px")};
`;

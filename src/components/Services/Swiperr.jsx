import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { Box, useMediaQuery } from "@mui/material";
import { ServiceItem } from "./serciceItem";
import { SwiperInnerTypography, SwiperTypography } from "./ServiceStyle";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const Swiperr = () => {
  const matches = useMediaQuery("(min-width:950px)");
  const match = useMediaQuery("(min-width:930px)");
  
  return (
    <>
      <Box
        sx={{
          mt: "10%",
        }}
      >
        <Swiper
          className="mySwiper"
          slidesPerView={matches ? 3 : 1}
          loop={true}
          loopFillGroupWithBlank={true}
          style={{
            fontSize: "16px",
            fontWeight: 700,
            display: "flex",
            justifyContent: "space-between",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {ServiceItem.map((item, index) => (
            <SwiperSlide
              key={item}
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                display: "flex",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              
                <Box>
                  <Box sx={{ textAlign: "center" }}>
                    {" "}
                    <img src={item.img} width="50%" />
                  </Box>
                  <SwiperTypography>{item.title}</SwiperTypography>
                  <SwiperInnerTypography matches={matches}>
                    {item.desc}
                  </SwiperInnerTypography>
                </Box>
              
            </SwiperSlide>
          ))}
          <Box
            sx={{
              mt: match ? "40%" : "55%",
            }}
          >
            <ArrowForwardIosIcon className="swiper-button-next" />
            <ArrowBackIosIcon className="swiper-button-prev" />
          </Box>
        </Swiper>
      </Box>
    </>
  );
};

export default Swiperr;

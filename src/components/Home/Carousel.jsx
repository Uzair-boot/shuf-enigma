import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { TestiTypo, CompanyTypo, TestiCard } from "../Home/HomeStyle";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { testimonial } from "../utils/Utils";

const Swiperr = () => {
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
          slidesPerView={1}
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
          {testimonial.map((item) => (
            <SwiperSlide
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                marginTop: "10%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
              key={item}
            >
              <TestiCard>
                <TestiTypo>{item.name}</TestiTypo>
                <CompanyTypo>{item.companyName}</CompanyTypo>
                <Box my={3}>
                  <img src={item.img} alt="star" />
                  <img src={item.img} alt="star" />
                  <img src={item.img} alt="star" />
                  <img src={item.img} alt="star" />
                  <img src={item.img} alt="star" />
                </Box>
                <Box>
                  <Typography>{item.desc}</Typography>
                </Box>
              </TestiCard>
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

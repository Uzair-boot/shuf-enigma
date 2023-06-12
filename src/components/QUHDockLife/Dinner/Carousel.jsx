import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Images } from "./Utils";
import Popup from "../Popup";
import { MainBox } from "./DinnerStyled";

const Slider = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(null);

  const matches = useMediaQuery("(min-width:950px)");

  const handleClickOpen = (arrayData) => {
    //  console.log(arrayData);
    setShowPopup(true);
    setData(arrayData);
  };

  return (
    <>
      <Box my="5%">
        <Swiper
          className="mySwiper"
          slidesPerView={matches ? 2.4 : 1.3}
          loop={true}
          loopFillGroupWithBlank={true}
          style={{
            fontSize: "16px",
            fontWeight: 700,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {Images.map((i) => {
            return (
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
                key={i}
              >
                <MainBox sx={{ textAlign: "center" }}>
                  <Box
                    onClick={() => handleClickOpen(i.array)}
                    sx={{ cursor: "pointer" }}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        width: "100%",
                        height: "250px",
                        borderRadius: "15px",
                      }}
                      src={i.img}
                      alt=""
                    />
                  </Box>
                  <Box mt="3%">
                    <Typography fontWeight="700">{i.place}</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight="700">{i.date}</Typography>
                  </Box>
                </MainBox>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {showPopup ? (
          <Popup
            openPopup={showPopup}
            arrayData={data}
            setShowPopup={setShowPopup}
          />
        ) : null}
      </Box>
    </>
  );
};

export default Slider;

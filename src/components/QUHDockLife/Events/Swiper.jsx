import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import "swiper/css/navigation";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useState } from "react";
import { Images } from "./utils";
import Popup from "../Popup";
import { MainBox, TextGrid } from "./EventStyled";

const Swiperr = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState(null);
  const myfontsize = useMediaQuery("(min-width: 950px)");
  const myfontsiz = useMediaQuery("(min-width: 740px)");


  const matches = useMediaQuery("(min-width:950px)");
  const match = useMediaQuery("(min-width:1030px)");

  const handleClickOpen = (arrayData) => {
    //  console.log(arrayData);
    setShowPopup(true);
    setData(arrayData);
  };

  return (
    <Box py={10} px={10}>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        style={{
          // fontSize: "16px",
          // fontWeight: 700,
          display: "flex",
          justifyContent: "space-between",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {Images.map((item) => (
          <SwiperSlide
            style={{
              paddingLeft: "10%",
              // paddingRight: "10%",
              // marginTop: "10%",
              // textAlign: "center",
              // display: "flex",
              // justifyContent: "center",
              boxSizing: "border-box",
            }}
            key={item}
          >
            <MainBox  onClick={() => handleClickOpen(item.array)}
              sx={{
                background:
                  "linear-gradient(180deg, rgba(121,181,217,1) 0%, rgba(48,106,180,1) 35%, rgba(2,5,6,1) 100%)",
              }}
            >
              <Grid container>
                <TextGrid item lg={6} md={6} sm={6} xs={6}>
                  <Box>
                    <Box
                      sx={{
                        // fontWeight: "700",
                        pl:'15%',
                        textAlign:'center',
                        fontSize: myfontsize ? "15px" : myfontsiz ? '15px' : '10px',
                      }}
                    >
                      {item.event}
                    </Box>

                    <Box
                      sx={{
                        alignItems: "center",
                        fontSize: myfontsiz ? '10px' : '8px',
                        py:'5px'
                      }}
                    >
                      {item.date}
                    </Box>
                  </Box>
                </TextGrid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box>
                    <img
                      style={{
                        maxWidth: "100%",
                        width: "80%",
                        marginLeft: "20%",
                      }}
                      src={item.img}
                      alt=""
                    />
                  </Box>
                </Grid>
              </Grid>
            </MainBox>
          </SwiperSlide>
        ))}
        <Box
          // sx={{
          //   mt: match ? "40%" : "55%",
          // }}
        >
          <ArrowForwardIosIcon className="swiper-button-next" />
          <ArrowBackIosIcon className="swiper-button-prev" />
        </Box>
      </Swiper>

      {/* <Swiper
        className="mySwiper"
        slidesPerView={match ? 3 : matches ? 2 : 1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {Images.map((item, index) => {
          return (
            <SwiperSlide
              key={item}
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                display: "flex",
                justifyContent: "center",
                boxSizing: "border-box",
                ml: "5%",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  onClick={() => handleClickOpen(item.array)}
                  sx={{ cursor: "pointer" }}
                >
                  <img 
                 style={{ maxWidth: "100%", width: "100%",height:'160px', borderRadius:'15px' }}
                  src={item.img} alt=""  />
                </Box>
                <Box>
                  <Typography fontWeight='700'>{item.event}</Typography>
                </Box>
                <Box>
                  <Typography fontWeight='700'>{item.date}</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}

        <Box>
          <ArrowForwardIosIcon className="swiper-button-next" />
          <ArrowBackIosIcon className="swiper-button-prev" />
        </Box>
      </Swiper>  */}
      {showPopup ? (
        <Popup
          openPopup={showPopup}
          arrayData={data}
          setShowPopup={setShowPopup}
        />
      ) : null}
    </Box>
  );
};

export default Swiperr;

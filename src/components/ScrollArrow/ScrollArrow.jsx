import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";

export default function ScrollArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "5%",
        right: "20px",
        height: "30px",
        fontSize: "3rem",
        zIndex: 10,
        cursor: "pointer",
      }}
    >
      <ArrowUpwardTwoToneIcon
        onClick={goToTop}
        style={{
          display: visible ? "inline" : "none",
          borderRadius: "30px",
          backgroundColor: "#184E93",
          color: "#FFFFFF",
          fontSize: "40px",
          fontWeight: "bolder",
        }}
      />
    </Box>
  );
}

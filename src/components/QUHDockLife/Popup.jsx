import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Container, Grid, Tooltip } from "@mui/material";
import { CloseButton, MainBox } from "./StyledComponet";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup({ openPopup, setShowPopup, arrayData }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  React.useEffect(() => {
    if (openPopup) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openPopup]);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Tooltip title='Close'>
          <CloseButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon sx={{ color: "#ffffff" }} />
          </CloseButton>
          </Tooltip>
        </Toolbar>
        <Container>
        <Grid container>
          {arrayData.map((i, index) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} key={i} >
                <MainBox>
                  <img
                    style={{
                      maxWidth: "100%",
                      width: "90%",
                      borderRadius: "50px",
                      height: "400px",
                      marginBottom:'10%'
                    }}
                    src={i.img}
                    alt=""
                  />
                </MainBox>
              </Grid>
            );
          })}
        </Grid>
        </Container>
      </Dialog>
    </div>
  );
}

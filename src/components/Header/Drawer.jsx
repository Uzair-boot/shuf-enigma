import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import crop from "../../assets/crop.png";
import { NavLink } from "react-router-dom";

export default function SwipeableTemporaryDrawer({ data }) {
  const myDisplay = useMediaQuery("(max-width: 900px)");

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(121,181,217,1) 0%, rgba(48,106,180,1) 35%, rgba(2,5,6,1) 100%)",
        height: "100%",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
        <NavLink to="/">
          <img
            style={{ maxWidth: myDisplay ? "40%" : "100%", marginTop: "6%" }}
            src={crop}
            alt=""
          />
        </NavLink>
      </Box>
      <List sx={{ marginLeft: "30%" }}>
        {data.map((item) => {
          let string = item.replace(/\s+/g, "").trim();
          let sentence = string.toLowerCase();
          return (
            <Box key={item} sx={{ color: "white" }}>
              <NavLink
                to={`/${sentence}`}
                smooth
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                <ListItem button>
                  <ListItemText primary={item} />
                </ListItem>
              </NavLink>
            </Box>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon style={{ color: "#184E93" }} />
            </IconButton>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

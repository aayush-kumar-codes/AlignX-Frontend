import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HeaderLink } from "../StaticData/Static";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/material";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
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
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        position: "relative",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box>
      <img src="images/Logo.png" alt="" className="navbar-logo"/>
      </Box>

      <List sx={{ bgcolor: "#03484" }}>
        {HeaderLink.map((text, index) => (
          <Link
            to={text.path}
            style={{
              textDecoration: "none",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "inherit",
            }}
            key={index}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Button
      className="responsive-navbar-bar"
      sx={{color : 'white'}}
        onClick={toggleDrawer("top", true)}
      >
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        sx={{ position: "relative", top: "500px" }}
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        <Stack sx={{ bgcolor: "#034844", color: "white" }}>
          <Button
            onClick={toggleDrawer("top", false)}
            sx={{ color: "inherit", width: "40px", ml: "auto" }}
          >
            <CloseIcon />
          </Button>
          {list("top")}
        </Stack>
      </SwipeableDrawer>
    </Box>
  );
}

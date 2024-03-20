import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography } from "@mui/material";
import { NavLinkData } from "../StaticData/navLinkData";

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
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <img
          src="images/AlignXlogo.png"
          width={70}
          alt=""
          className="navbar-logo"
        />
        <Typography fontWeight={"600"}>AlignX</Typography>
      </Box>

      <List sx={{ bgcolor: "#fff" }}>
        {NavLinkData.map((text, index) => (
          <Link
            to={text.path}
            style={{
              textDecoration: "none",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000",
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
        sx={{ color: "#000" }}
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
        <Stack sx={{ bgcolor: "#fff", color: "#000" }}>
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

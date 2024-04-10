import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLinkData } from "../StaticData/navLinkData";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    openSections: {}
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

  const toggleSection = (index) => {
    setState({
      ...state,
      openSections: {
        ...state.openSections,
        [index]: !state.openSections[index],
      },
    });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        position: "relative",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Link to={'/'}  onClick={toggleDrawer(anchor, false)}>
        <img
          src="images/AlignX-Logo.png"
          width={170}
          alt=""
          className="navbar-logo"
        />
        </Link>
      </Box>

      <List sx={{ bgcolor: "#fff" }}>
  {NavLinkData && NavLinkData.length > 0 && NavLinkData.map((text, index) => (
    <ListItem disablePadding key={index} sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {text.name === 'About Us' || text.name === 'Resources'|| text.name === 'Products' ? (
        <Link to={text.path}  onClick={toggleDrawer(anchor, false)}  style={{ textDecoration: "none", width: "100%",color:'inherit' }}>
          <ListItemButton sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <ListItemText primary={text.name} />
          </ListItemButton>
        </Link>
      ) : (
        <>
          <ListItemButton onClick={() => toggleSection(index)} sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <ListItemText primary={text.name} />
            {state.openSections[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={state.openSections[index]}
            timeout="auto"
            unmountOnExit
            sx={{ width: '100%' }}
          >
            <List component="div" disablePadding >
              {text?.list?.map((e, i) => (
                <Link
                onClick={toggleDrawer(anchor, false)}
                  key={i}
                  to={e.path}
                  style={{
                    textDecoration: "none",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#000",
                    width: '100%'
                  }}
                >
                  <ListItemButton sx={{ width: '100%', display: "flex", flexDirection: "column", justifyContent: 'left' }}>
                    <Stack sx={{ width: '100%' }}>
                      <ListItemText sx={{ '& .MuiTypography-root': { fontWeight: 'bold', fontSize: '14px' } }} primary={e?.title} />
                      <ListItemText sx={{ '& .MuiTypography-root': { fontSize: '14px' } }} primary={e?.shortDescription} />
                    </Stack>
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Collapse>
        </>
      )}
    </ListItem>
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
        onClose={toggleDrawer("top", true)}
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

import {
  AppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SwipeableTemporaryDrawer from "../Drawer/Drawer";
import { Links } from "../../pages/HomePage/Links";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavLinkData } from "../StaticData/navLinkData";

export const Navbar = () => {
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "#034844",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-around",
              width: { sm: "90%", xs: "100%" },
              alignItems: "center",
              margin: "auto",
            }}
            className="reponsive-nav-text"
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box display={"flex"}>
                <img src="images/AlignXlogo.png" alt="" width={"44px"} />
                <Typography variant="h5" color={"White"} marginLeft={"10px"}>
                  AlignX
                </Typography>
              </Box>
            </Link>
            <Stack direction={"row"} spacing={1} className="responsive-navbar">
              {NavLinkData.map((e, i) => (
                <Links path={e.path} name={e.name} key={i} />
              ))}
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                fontFamily: "sans-serif",
              }}
              className="responsive-navbar"
            >
              <Button className="btn" style={{ color: "white" }}>
                Log In
              </Button>
              <Button
                className="btn"
                style={{ color: "#034844", backgroundColor: "white" }}
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
          <SwipeableTemporaryDrawer />
        </Toolbar>
        <Divider
          sx={{
            backgroundColor: "gray",
            height: "1px",
            width: { md: "80%", xs: "100%" },
            margin: "auto",
            display: "block",
          }}
        />
      </AppBar>
      <Toolbar />
    </>
  );
};

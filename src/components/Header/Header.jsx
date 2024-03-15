import { AppBar, Box, Button, Divider, Stack, Toolbar } from "@mui/material";
import { HeaderLink } from "../StaticData/Static";
import SwipeableTemporaryDrawer from "../Drawer/Drawer";
import { Links } from "../../pages/HomePage/Links";
import './Header.css'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <AppBar
        sx={{ bgcolor: "#034844", position: "fixed", top: 0, zIndex: 1000 }}
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
            <Link to={"/"} >
              <img src="images/Logo.png" alt="" className="navbar-logo"/>
            </Link>
            <Stack
              direction={"row"}
              spacing={1}
              className="responsive-navbar"
            >
              {HeaderLink.map((e, i) => (
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
          <Divider sx={{ color: "white" }} />
        </Toolbar>
        <Divider
          sx={{
            backgroundColor: "white",
            height: "2px",
            width: { md: "80%", xs: "100%" },
            margin: "auto",
            display :'block'
          }}
        />
      </AppBar>
      <Toolbar />
    </>
  );
};

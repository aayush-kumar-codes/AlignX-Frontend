import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "../Drawer/Drawer";
import { Link } from "react-router-dom";
import CustomizedMenus from "../customisedmenu";

export const Navbar = ({setAnimation}) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "#fff",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          boxShadow: "1px",
          maxWidth: "100%",
        }}>
        <Toolbar>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "space-between" },
              width: { sm: "80%", xs: "80%" },
              alignItems: "center",
              margin: "auto",
            }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box display={"flex"} alignItems={"center"}>
                <img src="images/AlignX-Logo.png" alt="" width={"150px"} />
              </Box>
            </Link>
            <Box
              gap={5}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
              }}
              direction={"row"}
              spacing={1}>
             
              <CustomizedMenus setAnimation={setAnimation} />
            </Box>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                fontFamily: "sans-serif",
                display: { xs: "none", md: "block" },
              }}>
              {/* <Button
                className="btn"
                sx={{
                  color: "#424542",
                  fontWeight: "600",
                  ":hover": { color: "blue",borderRadius:"25px" },
                }}>
                Log In
              </Button>
              <Button
                className="btn"
                sx={{
                  color: "#fff",
                  backgroundColor: "#155EEF",
                  ":hover": { backgroundColor: "#3876f2",borderRadius:"25px" },
                }}>
                Get Started
              </Button> */}
            </Stack>
          </Stack>
          {isSmallScreen ? <SwipeableTemporaryDrawer /> : null}
        </Toolbar>
      </AppBar>
      <Toolbar />
      
    </>
  );
};
import {
  AppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SwipeableTemporaryDrawer from "../Drawer/Drawer";
import { Links } from "../../pages/HomePage/Links";
// import "./navbar.css";
import { Link } from "react-router-dom";
import { NavLinkData } from "../StaticData/navLinkData";
import CustomizedMenus from "../testing";

export const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      <AppBar
        sx={{
          bgcolor: "#fff",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          boxShadow: "none",
          maxWidth: "100%",
        }}>
        <Toolbar>
          <Stack
            direction={"row"}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "space-around" },
              width: { sm: "90%", xs: "100%" },
              alignItems: "center",
              margin: "auto",
            }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box display={"flex"} alignItems={"center"}>
                <img src="images/AlignX-Logo.png" alt="" width={"150px"} />
                {/* <Typography variant="h5"fontFamily={"Urbanist"} color={"#424542"} marginLeft={"2px"} fontWeight={600}>
                  AlignX
                </Typography> */}
              </Box>
            </Link>
            <Box
              gap={3}
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
              }}
              direction={"row"}
              spacing={1}>
              {/* {NavLinkData.map((e, i) => (
                <Box
                  key={i}
                  sx={{
                    fontFamily: "DM Sans",
                    fontSize: "16px",
                    fontStyle: "normal",
                  }}>
                  <Links
                    linkStyle={({ isActive, isPending }) =>
                      isPending
                        ? {
                            color: "#424542",
                            fontSize: "15px",
                            fontWeight: "bold",
                          }
                        : isActive
                        ? { fontWeight: "bold", color: "#e61b22" }
                        : {
                            color: "#424542",
                            fontSize: "15px",
                            padding: "10px",
                          }
                    }
                    path={e.path}
                    name={e.name}
                    to={e.path}
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}></Links>
                </Box>
              ))} */}
              <CustomizedMenus/>
            </Box>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                fontFamily: "sans-serif",
                display: { xs: "none", md: "block" },
              }}>
              <Button
                className="btn"
                sx={{
                  color: "#424542",
                  fontWeight: "600",
                  ":hover": { color: "blue" },
                }}>
                Log In
              </Button>
              <Button
                className="btn"
                sx={{
                  color: "#fff",
                  backgroundColor: "#155EEF",
                  ":hover": { backgroundColor: "#3876f2" },
                }}>
                Get Started
              </Button>
            </Stack>
          </Stack>
          {isSmallScreen ? <SwipeableTemporaryDrawer /> : null}
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
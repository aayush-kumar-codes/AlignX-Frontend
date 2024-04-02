import { Box, Stack, Typography } from "@mui/material";
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { Link } from "react-router-dom";
import { NavLinkData } from "../StaticData/navLinkData";
import ScrollToTop from "../scrollToTop";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f1f2", color: "#000" }}>
      <Box
        p={4}
        sx={{
          m: "auto",
          maxWidth: "1250px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}>
        <Link to={"/"}>
        <Box
          sx={{
            textAlign: { xs: "start", md: "center" },
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}>
         <Box>
         <img
            src="/images/AlignX-Logo.png"
            alt="logo"
            width={"150px"}
          />
         </Box>
          {/* <Typography p={1} variant="h6" sx={{ fontWeight: 600,color: "#000", }} fontFamily={"Urbanist"}>
            AlignX
          </Typography> */}
        </Box>
        </Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            gap: 2,
          }}
          mt={{ xs: "15px", md: "0px" }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Urbanist",
                fontWeight: 500,
                fontStyle: "normal",
              }}>
              Get in touch
            </Typography>
            <Typography
              pt={1}
              sx={{ fontFamily: "DM Sans", fontWeight: 400 }}
              variant="body1">
              rithviknaga@alignx.ai
            </Typography>
            {/* <Typography
              pt={2}
              sx={{ fontFamily: "DM Sans", fontWeight: 400 }}
              variant="body1">
              Address lorem ipsum dolo sit amet pratas lhadala malah penak tenan
            </Typography> */}
          </Box>
          {/* <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={2}
            m={{ xs: 1, md: 0 }}>
            <Link
              to="https://twitter.com/?lang=en"
              target="_blank"
              style={{ display: "flex", gap: "4px" }}>
              <XIcon
                sx={{
                  bgcolor: "white",
                  color: "black",
                  ":hover": { bgcolor: "black" ,color:"white"},
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  color: "#000",
                  ":hover": { color: "grey", },
                }}>
                Twitter
              </Typography>
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              target="_blank"
              style={{ display: "flex", gap: "4px" }}>
              <FacebookIcon
                sx={{
                  bgcolor: "#1877F2",
                  color: "#fff",
                  ":hover": { bgcolor: "black" },
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  color: "#000",
                  ":hover": { color: "grey" },
                }}>
                Facebook
              </Typography>
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              style={{ display: "flex", gap: "4px" }}>
              <InstagramIcon
                sx={{
                  bgcolor: "#CA4971",
                  color: "#fff",
                  ":hover": { bgcolor: "black" },
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "DM Sans",
                  ":hover": { color: "grey" },
                }}>
                Instagram
              </Typography>
            </Link>
          </Stack> */}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mt={{ xs: "15px", md: "auto" }}
          gap={5}>
          <Stack spacing={1}>
            <Typography
              sx={{ fontFamily: "Urbanist", fontWeight: 500 }}
              variant="h6">
              Info
            </Typography>
            {NavLinkData.map((e, i) => (
              <Link
                fontFamily="DM Sans"
                key={i}
                to={e.path}
                style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ fontFamily: "DM Sans",":hover": { color: "grey" }, }}>{e.name}</Box>
              </Link>
            ))}
          </Stack>
          <Stack>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Urbanist", fontWeight: 500 }}>
              Legal
            </Typography>
            <Typography sx={{ fontFamily: "DM Sans" }} variant="body1">
              <Link
                fontFamily="DM Sans"
                to={"#"}
                style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ fontFamily: "DM Sans", paddingTop: "7px",":hover": { color: "grey" }, }}>
                  {" "}
                  Terms of use
                </Box>
              </Link>
            </Typography>
            <Typography sx={{ fontFamily: "DM Sans" }} variant="body1">
              <Link
                fontFamily="DM Sans"
                to={"#"}
                style={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={{ fontFamily: "DM Sans",":hover": { color: "grey" }, }}> Privacy policy</Box>
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Stack sx={{ alignItems: "center", bgcolor: "#3d3d3d", color: "#fff" }}>
        <Typography variant="body1" sx={{ p: "10px" }}>
          &copy; 2024. AlignX
        </Typography>
      </Stack>
      <ScrollToTop />
    </Box>
  );
};
export default Footer;
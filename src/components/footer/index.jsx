import { Box, Stack, Typography } from "@mui/material";
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
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
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img
            src="/images/AlignXlogo.png"
            alt="logo"
            width={100}
            style={{ borderRadius: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Alignx
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            gap: 2,
          }}
          mt={{ xs: "15px", md: "0px" }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Get in touch
            </Typography>
            <Typography variant="body1">hello@mahameru.com</Typography>
            <Typography variant="body1">
              Address lorem ipsum dolo sit amet pratas lhadala malah penak tenan
            </Typography>
          </Box>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={2}
            m={{ xs: 1, md: 0 }}
          >
            <Link
              to="https://twitter.com/?lang=en"
              target="_blank"
              style={{ display: "flex", gap: "4px" }}
            >
              <TwitterIcon
                sx={{
                  bgcolor: "#1DA1F2",
                  color: "#fff",
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
              <Typography
                sx={{
                  color: "#000",
                  ":hover": { color: "blue" },
                }}
              >
                Twitter
              </Typography>
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              target="_blank"
              style={{ display: "flex", gap: "4px" }}
            >
              <FacebookIcon
                sx={{
                  bgcolor: "#1877F2",
                  color: "#fff",
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
              <Typography
                sx={{
                  color: "#000",
                  ":hover": { color: "blue" },
                }}
              >
                Facebook
              </Typography>
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              style={{ display: "flex", gap: "4px" }}
            >
              <InstagramIcon
                sx={{
                  bgcolor: "#CA4971",
                  color: "#fff",
                  borderRadius: "50%",
                  p: "4px",
                }}
              />
              <Typography
                sx={{
                  color: "#000",
                  ":hover": { color: "blue" },
                }}
              >
                Instagram
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mt={{ xs: "15px", md: "auto" }}
          gap={5}
        >
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Info
            </Typography>
            {NavLinkData.map((e, i) => (
              <Link
                key={i}
                to={e.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {e.name}
              </Link>
            ))}
          </Stack>
          <Stack>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Legal
            </Typography>
            <Typography variant="body1">Terms of use</Typography>
            <Typography variant="body1">Privacy policy</Typography>
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

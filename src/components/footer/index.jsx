import { Stack, Typography } from "@mui/material";
import {
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { NavLinkData } from "../StaticData/navLinkData";



const Footer = () => {
  return (
    <Stack sx={{ backgroundColor: "#f0f1f2", color: "#000" }}>
      <Stack
        spacing={{ lg: 10, xs: 3 }}
        direction={{ md: "row", xs: "column" }}
        sx={{
          justifyContent: "center",
          m: "auto",
          alignItems: "flex-start",
          p: "40px 20px",
        }}
      >
        <Stack sx={{textAlign:"center"}}>
          <img src="/images/AlignXlogo.png" alt="logo" style={{borderRadius:"10px"}}/>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Alignx
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Get in touch
          </Typography>
          <Typography variant="body1">hello@mahameru.com</Typography>
          <Typography variant="body1">
            Address lorem ipsum dolo sit amet pratas lhadala malah penak tenan
          </Typography>
          <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
            <Stack direction={"row"} spacing={1}>
              <TwitterIcon
                sx={{ bgcolor: "#1DA1F2", borderRadius: "50%", p: "4px" }}
              />
              <Typography>Twitter</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <FacebookIcon
                sx={{ bgcolor: "#1877F2", borderRadius: "50%", p: "4px" }}
              />
              <Typography>Facebook</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <InstagramIcon
                sx={{ bgcolor: "#CA4971", borderRadius: "50%", p: "4px" }}
              />
              <Typography>Instagram</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", width: "100%" }}
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
          <Stack spacing={1}>
            {" "}
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Legal
            </Typography>
            <Typography variant="body1">Terms of use</Typography>
            <Typography variant="body1">Privacy policy</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ alignItems: "center", bgcolor: "#3d3d3d", color:"#fff" }}>
        <Typography variant="body1" sx={{ p: "10px" }}>
          &copy; 2023. Corewelank
        </Typography>
      </Stack>
    </Stack>
  );
};
export default Footer;
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Stack, Typography } from "@mui/material";
import { NavLinkData } from "./StaticData/navLinkData";
import { Link, useHref } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    width: "40%",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],

    boxShadow: "3px 2px 15px 0px #00000078",
  },
  "& .MuiMenuItem-root": {
    fontSize: 16,
    padding: "10px",
    color:
      theme.palette.mode === "light" ? "#424542" : theme.palette.text.secondary,
    borderBottom: "1px solid #ccc",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  "& .MuiSvgIcon-root": {
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
}));

export default function CustomizedMenus({ setAnimation }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const href = useHref();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setId] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleSetAnimation = (path) => {
    if (path === href.replace(href, path)) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setId(id === index ? null : index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setId(null);
  };
  useEffect(() => {
    handleClose();
  }, [matches]);

  return (
    <Stack direction={"row"} spacing={3} sx={{ alignItems: "center"}}>
      {NavLinkData.map((navLink, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Stack
                direction={"row"}
                sx={{
                  cursor: "pointer",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "space-between",
                }}
                onClick={(event) => handleClick(event, index)}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    fontFamily: "DM Sans",
                    fontSize: "16px",
                    ":hover": { color: "#424542" },
                    alignSelf: "center",
                  }}>
                  {navLink.name}
                </Typography>
                <Typography 
                  variant="body1"
                  color={"#424542"}
                  sx={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowDownIcon className={index === id && "rotate"} />
                </Typography>
              </Stack>
              <StyledMenu
                MenuListProps={{ "aria-labelledby": "demo-customized-button" }}
                anchorEl={anchorEl}
                open={open && id === index}
                onClose={handleClose}
                sx={{
                  display: "flex",
                  "& .MuiPaper-root": {
                    margin: {
                      lg: "26px -3px 1px -140px",
                      md: "24px -5px -2px -96px",
                    },
                  },
                }}>
                <Stack>
                  {(navLink.list || []).map((details, idx) => (
                    <Link
                      onClick={() => handleSetAnimation(details.path)}
                      style={{
                        width: "100%",
                        wordWrap: "break-word",
                        padding: "10px",
                        display: "flex",
                        gap: 2,
                      }}
                      to={details.path}
                      key={idx}>
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{
                          width: "100%",
                          color: "#424542",
                          display: { md: "block", xs: "none" },
                          padding: "10px",
                        }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "700",
                            fontFamily: "Urbanist",
                            whiteSpace: "normal",
                          }}>
                          {details.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          mt={2}
                          sx={{ whiteSpace: "normal", fontFamily: "DM Sans" }}>
                          {details.shortDescription}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Stack>
              </StyledMenu>
        </Box>
      ))}
    </Stack>
  );
}

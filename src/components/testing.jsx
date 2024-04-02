import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Typography } from "@mui/material";
import { NavLinkData } from "./StaticData/navLinkData";
import { navbarProductList } from "../utils/StaticData/productPageData";
import { navbarSolutionList } from "../utils/StaticData/solutionPageData";
import { Link } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      width: "500px",
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      width: "500px",
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setId] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, i) => {
    setAnchorEl(event.currentTarget);
    setId(i);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setId(null);
  };

  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      {NavLinkData.map((e, i) => (
        <Box key={i}>
          <Box
            sx={{ display: "flex", mr: 3, mt: 1, cursor: "pointer" }}
            onClick={(e) => handleClick(e, i)}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#424542",

                fontFamily: "DM Sans",
                fontSize: "16px",
                ":hover": { color: "#424542" },
              }}
            >
              {e.name}
            </Typography>
            <Typography variant="body1" color={"#424542"}>
              {i !== id ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Typography>
          </Box>
          <StyledMenu
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            style={{ display: "flex" }}
          >
            {id === 0 &&
              navbarProductList.map((details, i) => (
                <Link to={details.path}>
                  <MenuItem
                    onClick={handleClose}
                    disableRipple
                    key={i}
                    sx={{ width: "100%",color: "#424542" }}
                  >
                    {details.title}
                    <br />
                    {details.shortDescription}
                  </MenuItem>
                </Link>
              ))}
            {id === 1 &&
              navbarSolutionList.map((details, i) => (
                <Link to={details.path}>
                  <MenuItem
                    onClick={handleClose}
                    disableRipple
                    key={i}
                    sx={{ width: "100%", color: "#424542" }}
                  >
                    {details.title}
                    <br />
                    {details.shortDescription}
                  </MenuItem>
                </Link>
              ))}
            {id > 1 && (
              <MenuItem onClick={handleClose} disableRipple>
                {"Title"}
                <br />
                {"Description"}
              </MenuItem>
            )}
          </StyledMenu>
        </Box>
      ))}
    </Box>
  );
}

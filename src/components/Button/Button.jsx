import { Button } from "@mui/material";

const ButtonComponent = ({ icon, text, variant, styles, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : "contained"}
      sx={{
        ...styles,
        display: "flex",
        alignItems: "center",
        width: { xs: "238px", md: "auto" },
        ":hover": {
          opacity: "0.8",
          borderRadius: "25px",
          transition: "0.6s",
        },
      }}>
      {text}
      {icon && (
        <img
          src={icon}
          alt="ic_arrow right"
          style={{ height: "30px", width: "18px" }}
        />
      )}
    </Button>
  );
};

export default ButtonComponent;

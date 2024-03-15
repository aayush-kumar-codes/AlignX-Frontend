import React from "react";
import { Link } from "react-router-dom";

export const Links = ({ name, path }) => {
  return (
    <Link
      style={{
        color: "#FFFFFF",
        textDecoration: "none",
        fontFamily: "sans-serif",
        fontSize: "15px",
        padding: "10px",
      }}
      to={path}
    >
      {name}
    </Link>
  );
};

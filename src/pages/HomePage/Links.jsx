import { NavLink } from "react-router-dom";

export const Links = ({ name, path, linkStyle }) => {
  return (
    <NavLink style={linkStyle} to={path}>
      {name}
    </NavLink>
  );
};

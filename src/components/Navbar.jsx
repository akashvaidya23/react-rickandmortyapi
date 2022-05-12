import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bolder", marginLeft: "10px" }}
        >
          Dashboard
        </NavLink>
        <NavLink
          className="navbar-brand"
          to="/home"
          style={{ fontSize: "15px" }}
        >
          Home
        </NavLink>
        <NavLink
          className="navbar-brand"
          to="/liked"
          style={{ fontSize: "15px" }}
        >
          Liked
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;

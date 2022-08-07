import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => {
    return state.isLoggedIn;
  });
  const onLogout = () => {
    dispatch(signOut());
  };
  return (
    <AppBar
      position="static"
      style={{
        background: "#2E3B55",
        display: location.pathname === "/sign-in" ? "none" : "flex",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          ITWOX Demo
        </Typography>

        {!isLoggedIn && (
          <Button
            style={{ color: "#FFFFFF", fontSize: 18 }}
            component={Link}
            to="/sign-in"
          >
            Sign in
          </Button>
        )}

        {location?.pathname === "/" && (
          <Button
            style={{ color: "#FFFFFF", fontSize: 18 }}
            component={Link}
            to="/dashboard"
          >
            Dashboard
          </Button>
        )}
        {location?.pathname === "/dashboard" && (
          <Button
            style={{ color: "#FFFFFF", fontSize: 18 }}
            component={Link}
            to="/"
          >
            Home
          </Button>
        )}

        {location?.pathname !== "/sign-in" && (
          <Button
            style={{ color: "#FFFFFF", fontSize: 18 }}
            component={Link}
            to="/sign-in"
            onClick={onLogout}
          >
            Sign out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

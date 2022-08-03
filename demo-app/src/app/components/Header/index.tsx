import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, useLocation } from "react-router-dom";

import React, { useState } from "react";
const Header = () => {
  const location = useLocation();
  return (
    <AppBar position="static" style={{ background: "#2E3B55" }}>
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

        {location?.pathname !== "/sign-in" && (
          <Button
            style={{ color: "#FFFFFF", fontSize: 18 }}
            component={Link}
            to="/sign-in"
          >
            Sign in
          </Button>
        )}

        {location?.pathname !== "/home" && (
          <Button
            style={{ color: "#FFFFFF", fontSize: 18 }}
            component={Link}
            to="/dashboard"
          >
            Dashboard
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

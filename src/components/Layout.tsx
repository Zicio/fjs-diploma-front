import { Link, Outlet } from "react-router-dom";
import AuthProfileButton from "./AuthProfileButton";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "./Navbar";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { green, lime } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: green,
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#333a45",
          color: "white",
          borderWidth: "1px",
          borderColor: "white",
        },
      },
    },
  },
});

const Layout = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundSize: "cover",
                backgroundImage: "url('/logo.jpg')",
                "&:hover": {
                  backgroundImage: "url('/logo_hover.jpg')",
                },
              }}
            ></Box>
          </Link>
          {auth && (
            <Box component={"div"}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  sx={{
                    "&:hover": {
                      backgroundColor: "red",
                    },
                  }}
                  onClick={handleClose}
                >
                  Профиль
                </MenuItem>
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Layout;

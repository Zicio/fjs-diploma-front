import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { blueGrey, red } from "@mui/material/colors";
import Navbar from "./Navbar";

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: red,
    background: {
      default: "black",
      paper: "#333a45",
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          color: "white",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "gray",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: "white",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:hover": {
            backgroundColor: "gray",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "gray",
          },
        },
      },
    },
  },
});

const Layout = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            disabled={isDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundSize: "cover",
                backgroundImage: "url('/logo.jpg')",
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
                <MenuItem onClick={handleClose}>Профиль</MenuItem>
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" open={isDrawerOpen}>
        <Navbar handleDrawer={setIsDrawerOpen} />
      </Drawer>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

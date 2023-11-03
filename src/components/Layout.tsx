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
  Typography,
  createTheme,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useState } from "react";
import Navbar from "./Navbar";

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
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #c2e0ff14",
          }}
        >
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            edge="start"
            disabled={isDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              component={Link}
              to={"/"}
              color="secondary"
              disableRipple
            >
              <ElectricBoltIcon fontSize="large" />
            </IconButton>
            <Box
              component="div"
              sx={{
                margin: "8px 0px",
                paddingLeft: "8px",
                borderLeft: "1px solid #c2e0ff14",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                color="secondary"
                variant="h4"
                component="h1"
                fontFamily="cursive"
              >
                Farada
              </Typography>
              <Typography
                color="secondary"
                variant="caption"
                sx={{
                  opacity: 0.6,
                }}
              >
                Бронирование отелей
              </Typography>
            </Box>
          </Box>
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
      <Container
        sx={{
          paddingTop: "50px",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

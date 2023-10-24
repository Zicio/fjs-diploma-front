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

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#ce93d8",
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
            borderBottom: "1px solid #c2e0ff14",
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
          <Box
            component={"div"}
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
            <Typography
              color="secondary"
              sx={{
                paddingLeft: "8px",
                borderLeft: "1px solid gray",
              }}
            >
              Farada
              <br />
              Бронирование отелей
            </Typography>
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
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

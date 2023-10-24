import { IconButton, List, styled } from "@mui/material";
import NavbarLink from "./NavbarLink";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FC } from "react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar: FC<{
  handleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ handleDrawer }) => {
  const handleDrawerClose = () => {
    handleDrawer(false);
  };
  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <nav>
        <List>
          <NavbarLink path="/" name="На главную" />
          <NavbarLink path="/hotels" name="Все гостиницы" />
          <NavbarLink path="/rooms" name="Поиск номера" />
          <NavbarLink path="/users" name="Пользователи" />
        </List>
      </nav>
    </>
  );
};

export default Navbar;

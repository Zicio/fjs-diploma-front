import { IconButton, List, ListItem, styled } from "@mui/material";
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
          <ChevronLeftIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem>
          <NavbarLink path="/" name="На главную" />
        </ListItem>
        <ListItem>
          <NavbarLink path="/hotels" name="Все гостиницы" />
        </ListItem>
        <ListItem>
          <NavbarLink path="/rooms" name="Поиск номера" />
        </ListItem>
        <ListItem>
          <NavbarLink path="/users" name="Пользователи" />
        </ListItem>
      </List>
    </>
  );
};

export default Navbar;

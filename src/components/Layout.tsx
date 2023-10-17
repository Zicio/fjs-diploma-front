import { Link, Outlet } from "react-router-dom";
import AuthProfileButton from "./AuthProfileButton";
import { Avatar } from "@mui/material";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <header className="flex justify-between items-center border-b border-[color:var(--border-color)] p-2">
        <Link
          to="/"
          className="block w-20 h-20 bg-[url('/logo.jpg')] bg-cover hover:bg-[url('/logo_hover.jpg')]"
        ></Link>
        <div className="grid grid-cols-2 gap-6">
          <AuthProfileButton />
          <Avatar
            alt="Аватар пользователя"
            src="/default_avatar.svg"
            variant="square"
          />
        </div>
      </header>
      <div className="grid grid-cols-[1fr_6fr] gap-10 mt-6">
        <Navbar />
        <main className="p-4 border border-[color:var(--border-color)] rounded-md bg-[#333a45]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;

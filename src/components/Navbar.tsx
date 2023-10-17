import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <nav className="border border-[color:var(--border-color)] rounded-md w-fit text-lg bg-[#333a45]">
      <ul className="grid gap-4 p-4">
        <NavbarLink path="/" name="На главную" />
        <NavbarLink path="/hotels" name="Все гостиницы" />
        <NavbarLink path="/rooms" name="Поиск номера" />
        <NavbarLink path="/users" name="Пользователи" />
      </ul>
    </nav>
  );
};

export default Navbar;

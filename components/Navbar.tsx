import React from "react";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = React.useState("");
  const { pathname } = useRouter();
  React.useEffect(() => {
    pathname === "/" && setActiveMenu((prev) => "About");
    pathname === "/resume" && setActiveMenu((prev) => "Resume");
  }, []);
  return (
    <div className="flex gap-10 px-5 py-3 my-3">
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeMenu}
          route="/"
          name="About"
          setActiveItem={setActiveMenu}
        />
        <NavItem
          activeItem={activeMenu}
          route="/resume"
          name="Resume"
          setActiveItem={setActiveMenu}
        />
      </div>
    </div>
  );
};
export default Navbar;

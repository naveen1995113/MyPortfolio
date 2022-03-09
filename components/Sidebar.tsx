import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import avatar from "../public/assets/avt.png";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const emailHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open("mailto:naveenkumarch03@gmail.com");
  };
  return (
    <div>
      <Image
        src={avatar}
        alt="avatar"
        className="mx-auto border rounded-full"
        width="150px"
        height="150px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-semibold tracking-wider font-parisienne">
        <span className="text-cblue dark:text-clight">Naveen</span> Kumar
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark200"
        href="/assets/resume.pdf"
        download="Resume.pdf"
      >
        <AiOutlineDownload className="w-6 h-6" />
        Download resume
      </a>
      <div className="flex justify-around w-full mx-auto my-5 text-cblue dark:text-clight">
        <a href="https://www.linkedin.com/in/naveen-kumar-chintakindi-53154311a/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/naveen1995113">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Hyderabad,India</span>
        </div>
        <p className="my-2">naveenkumarch03@gmail.com</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-cblue to-clight focus:outline-none"
        onClick={emailHandler}
      >
        Email me
      </button>
      <button
        onClick={themeHandler}
        className="w-8/12 px-5 py-2 my-2 text-black rounded-full dark:text-white bg-gradient-to-r from-cblue to-clight focus:outline-none "
      >
        {theme === "light" ? (
          <div className="flex items-center justify-center gap-2">
            Dark Theme
            <MdDarkMode className="w-5 h-5" />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            Light Theme
            <MdLightMode className="w-5 h-5" />
          </div>
        )}
      </button>
    </div>
  );
};
export default Sidebar;

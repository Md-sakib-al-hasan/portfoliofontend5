"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, UserIcon, X } from "lucide-react"; // Import icons
import { motion } from "framer-motion";
import Link from "next/link";
import LightandDarktoggel from "@/components/customUi/LightandDarktoggel";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <div className="bg-black/5">
      <nav className="flex container mx-auto items-center justify-between xl:px-0 px-8  py-4 relative">
        {/* Logo on the Left */}
        <Link href="/">
          <div className="text-red-400">
            <Image
              className="hidden dark:block"
              src="/image.svg"
              alt="Logo"
              width={30}
              height={30}
            />
            <Image
              className="dark:hidden"
              src="/logo2.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-black items-center">
          {navItems.map((item,index) => (
            <motion.li  initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }} key={item.path}>
              <Link
                href={item.path}
                className={`text-md font-medium ${
                  pathname === item.path
                    ? " text-red-400 dark:text-[#00eeff] font-bold"
                    : " dark:text-white text-black"
                }text-red-400 dark:hover:text-[#00eeff] transition`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
           <Link href="/drashboard"><UserIcon  className={`text-md font-medium ${
                  pathname === "/drashboard"
                    ? " text-red-400 dark:text-[#00eeff] font-bold"
                    : " dark:text-white text-black"
                }text-red-400 dark:hover:text-[#00eeff] transition`}/></Link>
           <LightandDarktoggel/>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden  text-black dark:text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-[#1f232e] shadow-md p-6 md:hidden flex justify-between">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li  key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-md font-medium block ${
                      pathname === item.path
                        ? "text-red-400 dark:text-[#00eeff] font-bold"
                        : " dark:text-white text-black"
                    }  text-red-400 dark:hover:text-[#00eeff] transition`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
            </ul>
            <LightandDarktoggel/>
          </div>
        )}
      </nav>
      
    </div>
  );
};

export default Navbar;

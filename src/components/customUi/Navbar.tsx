"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, UserIcon, X, ChevronDown } from "lucide-react" 
import { motion } from "framer-motion"
import Link from "next/link"
import LightandDarktoggel from "@/components/customUi/LightandDarktoggel"
import type { Session } from "next-auth"

const Navbar = ({ session }: { session: Session | null }) => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false) 
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false) 

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" }, 
    { name: "Login", path: "/login" },
    { name: "About", path: "/about" },
  ]

 
  const blogItems = [
    { name: "Video", path: "/blog" },
    { name: "Document", path: "/document" },
  ]

  
  const isBlogPath = pathname === "/blog" || pathname.startsWith("/blog/")

  return (
    <div className="bg-black/5">
      <nav className="flex md:flex-row flex-col container mx-auto md:items-center items-end justify-between xl:px-0 px-2 md:px-8 py-4 relative">
        {/* Logo on the Left */}
        <Link href="/">
          <div className="text-red-400">
            <Image className="hidden md:dark:block" src="/image.svg" alt="Logo" width={30} height={30} />
            <Image className="dark:hidden" src="/logo2.png" alt="Logo" width={30} height={30} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-black items-center">
          {navItems.map((item, index) => (
            <motion.li
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              key={item.path}
            >
              <Link
                href={item.path}
                className={`text-md font-medium ${
                  pathname === item.path ? "text-red-400 dark:text-[#00eeff] font-bold" : "dark:text-white text-black"
                } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
              >
                {session && (item.name === "SignIn" || item.name === "Login") ? "" : item.name}
              </Link>
            </motion.li>
          ))}

          {/* Blog dropdown for desktop */}
          <motion.li
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="relative"
            onMouseEnter={() => setBlogDropdownOpen(true)}
           
          >
            <button
              onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
              className={`text-md font-medium flex items-center ${
                isBlogPath ? "text-red-400 dark:text-[#00eeff] font-bold" : "dark:text-white text-black"
              } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
            >
              Blog
             
            </button>

            {blogDropdownOpen && (
              <div  onMouseLeave={() => setBlogDropdownOpen(false)} className="absolute top-full bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden z-50">
                {blogItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setBlogDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm ${
                      pathname === item.path
                        ? "text-red-400 dark:text-[#00eeff] font-bold bg-gray-100 dark:bg-gray-800"
                        : "text-black dark:text-white"
                    } hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-400 dark:hover:text-[#00eeff] transition`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </motion.li>

          <Link className={`${session ? "block" : "hidden"}`} href="/drashboard">
            <UserIcon
              className={`text-md font-medium ${
                pathname === "/drashboard" ? "text-red-400 dark:text-[#00eeff] font-bold" : "dark:text-white text-black"
              } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
            />
          </Link>
          <LightandDarktoggel />
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-black dark:text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="min-h-screen top-full left-0 w-full bg-white dark:bg-[#1f232e] shadow-md p-6 md:hidden flex justify-between">
            <ul className="flex flex-col space-y-4 w-full">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-md font-medium block ${
                      pathname === item.path
                        ? "text-red-400 dark:text-[#00eeff] font-bold"
                        : "dark:text-white text-black"
                    } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
                  >
                    {session && (item.name === "SignIn" || item.name === "Login") ? "" : item.name}
                  </Link>
                </li>
              ))}

              {/* Blog dropdown for mobile */}
              <li>
                <button
                  onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                  className={`text-md font-medium flex items-center w-full justify-between ${
                    isBlogPath ? "text-red-400 dark:text-[#00eeff] font-bold" : "dark:text-white text-black"
                  } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
                >
                  Blog
                  <ChevronDown className={`h-4 w-4 transition-transform ${blogDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {blogDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                    {blogItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-1 text-sm ${
                          pathname === item.path
                            ? "text-red-400 dark:text-[#00eeff] font-bold"
                            : "text-black dark:text-white"
                        } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <Link className={`${session ? "block" : "hidden"}`} href="/drashboard" onClick={() => setMenuOpen(false)}>
                <UserIcon
                  className={`text-md font-medium ${
                    pathname === "/drashboard"
                      ? "text-red-400 dark:text-[#00eeff] font-bold"
                      : "dark:text-white text-black"
                  } hover:text-red-400 dark:hover:text-[#00eeff] transition`}
                />
              </Link>
            </ul>

            <LightandDarktoggel menu={setMenuOpen} />
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar

"use client"
import LinkButton from "@/components/customUi/LinkButton"
import { signOut } from "next-auth/react"
import { GoProjectSymlink } from "react-icons/go"
import { MdOutlineVideoSettings } from "react-icons/md"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { TbMessageCircleUser } from "react-icons/tb"
import { useRouter } from "next/navigation"; 
import Cookies from "js-cookie";


const SidebarList = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    router.push("/login");
  };

  
   
  return (
    <ul className="space-y-1">
            <li><LinkButton path="/drashboard" title="Project Management" icon={<GoProjectSymlink size={22} />} /></li>
            <li><LinkButton path="/drashboard/blog" title=" Blog Management" icon={<MdOutlineVideoSettings size={22} />} /></li>
            <li><LinkButton path="/drashboard/message" title="Message Management" icon={<TbMessageCircleUser size={22} />} /></li>
            <li onClick={() => signOut({callbackUrl:"http://localhost:3000"})}>
            <button onClick={handleLogout} className="text-black  py-2 px-2 items-center rounded-lg group   text-md hover:bg-red-400 dark:hover:bg-customBlue hover:text-white w-full flex gap-2 ">
                   <span className="text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-customDark ">< RiLogoutCircleRLine ></RiLogoutCircleRLine></span> <span className="text-gray-600 dark:text-white group-hover:text-white dark:group-hover:text-customDark">Logout</span>
             </button>
            </li>
            
            
         </ul>
  )
}

export default SidebarList

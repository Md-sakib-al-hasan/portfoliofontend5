"use client"
import LinkButton from "@/components/customUi/LinkButton"
import  { ReactNode } from "react"
import { CgProfile } from "react-icons/cg"
import { FaRegHeart } from "react-icons/fa"
import { LuShoppingCart } from "react-icons/lu"
import { RiLogoutCircleRLine } from "react-icons/ri"

const layout = ({children}:{children:ReactNode}) => {
    const handlelogout = () => {
       
    }
  return  (
    <div  className={`flex md:flex-row flex-col  `}>
   
        <div className="  md:w-[20%] w-full px-2 py-6 shadow-xl  ">
        <h2 className="flex  mb-10 items-center gap-2 "> <span className="block font-medium text-xl">Sakib al</span> </h2>
         <ul className="space-y-1">
            <li><LinkButton path="/customer" title="Blog Management" icon={<CgProfile size={22} />} /></li>
            <li><LinkButton path="/customer/order" title="Project Management" icon={<LuShoppingCart size={22} />} /></li>
            <li><LinkButton path="/customer/whiteList" title="Message Management" icon={<FaRegHeart size={22} />} /></li>
            <li onClick={handlelogout}><LinkButton  path="/admin/Logout" title="Logout" icon={<RiLogoutCircleRLine size={20} />} /></li>
            
            
         </ul>
        </div>
        <div className="md:w-[80%] w-full">
           {children}
        </div>
    </div>
  )
}

export default layout

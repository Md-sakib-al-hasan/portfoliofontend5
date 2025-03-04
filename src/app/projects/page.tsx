import Image from "next/image"
import banner from "@/components/assets/project/sysadmin_03-removebg-preview.png"
import Projecttypes from "@/components/customUi/Projecttypes"
import Cards from "@/components/customUi/Cards"


const projectpage = () => {
  return (
    <div className="">
       <div className=" bg-gradient-to-r from-[#264871] to-[#4ebdb4] ">
       <div className=" container mx-auto md:flex justify-between xl:px-0 px-8  ">
      
        <ul className="md:mt-10 md:text-left text-center">
          <li className="uppercase text-red-400 dark:text-customBlue text-2xl md:text-3xl font-bold ">web development <br ></br> project</li>
            
          <Projecttypes title="Portfolio,Landing Page,E-commerce ,Dashboard,E-commerce ,Blog CMS,Real-time Chat App,Job Board"/>
        </ul>
        <Image src={banner} className=" object-cover w-80 object-top " alt="banner"/>
       
        </div>
       </div>
       <div className=" ">
          <Cards/>
       </div>
       
    </div>
  )
}

export default projectpage

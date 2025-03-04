import Image from "next/image"
import banner from "@/components/assets/project/3751179-removebg-preview.png"
import Projecttypes from "@/components/customUi/Projecttypes"
import VidoeCards from "@/components/customUi/VidoeCards"



const Blogpage = () => {
    
  return (
    <div className="">
       <div className=" bg-gradient-to-r from-[#264871] to-[#4ebdb4] ">
       <div className=" container mx-auto md:flex justify-between xl:px-0 px-8  ">
      
        <ul className="md:mt-10 md:text-left text-center">
          <li className="uppercase text-red-400 dark:text-customBlue text-2xl md:text-3xl font-bold ">Content Creator</li>
          <Projecttypes title="I specialize in front-end and back-end development with technologies like React, Next.js and Express.js"/>
        </ul>
        <Image src={banner} className=" object-cover w-80 object-top " alt="banner"/>
       
        </div>
       </div>
       <div className="">
    
       </div>
      <VidoeCards/>

    </div>
  )
}

export default Blogpage

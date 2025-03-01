import Image from "next/image"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"


const HomeCard = () => {
  return (
    <div>
       <div className="p-4 border-2 bg-white dark:bg-gray-900 rounded-lg space-y-4  shadow-md ">
        <Image src="https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" className="min-w-50 max-w-50 max-h-60 min-h-60 object-fill " width={300} height={300} alt=""/>
        <div className="flex justify-between items-center">
            <div >
                 <span className="block text-lg font-semibold mb-2">Real SateWebsite</span>
                 <Link href="/"><button className="dark:bg-customBlue bg-red-400 text-white dark:text-customDark py-1 text-sm rounded-md mr-2 px-2">Source Code</button></Link>
                 <Link href="/"><button  className="dark:bg-customBlue bg-red-400 text-white dark:text-customDark py-1 text-sm rounded-md mr-2 px-2"> more Details</button></Link>

            </div>
            <div className="bg-red-400 dark:bg-customBlue p-2 rounded-sm">
             <GoArrowUpRight size={22} className="text-white dark:text-customDark"  />
            </div>
        </div>

       </div>
    </div>
  )
}

export default HomeCard

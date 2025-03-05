import Image from "next/image"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"

type TCardProes = {imgurl:string,livelink:string, id:string,title:string}


const HomeCard = ({imgurl,livelink, id,title}:TCardProes) => {
  return (
    <div>
       <div className="p-4 border-2 bg-white dark:bg-gray-900 rounded-lg space-y-4  shadow-md ">
        <Image src={imgurl} className="min-w-50 max-w-50 max-h-60 min-h-60 object-fill " width={300} height={300} alt=""/>
        <div className="flex justify-between items-center">
            <div >
                 <span className="block text-lg font-semibold mb-2 line-clamp-1">{title}</span>
                 <Link href={livelink}><button className="dark:bg-customBlue bg-red-400 text-white dark:text-customDark py-1 text-sm rounded-md mr-4 px-2">Live Link</button></Link>
                 <Link href={`/projects/${id}`}><button  className="dark:bg-customBlue bg-red-400 text-white dark:text-customDark py-1 text-sm rounded-md mr-4 px-2"> more Details</button></Link>

            </div>
              <Link  href={`/projects/${id}`}><div className="bg-red-400 dark:bg-customBlue p-2 rounded-sm">
             <GoArrowUpRight size={22} className="text-white dark:text-customDark"  />
            </div></Link>
        </div>

       </div>
    </div>
  )
}

export default HomeCard

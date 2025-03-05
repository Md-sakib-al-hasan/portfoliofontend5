
import SigineForm from "@/actions/sigine";
import SidebarList from "@/components/customUi/SidebarList"
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth"
import  { ReactNode } from "react"



const layout = async ({children}:{children:ReactNode}) => {

  const session = await getServerSession(authOptions);
  if(session?.user?.name && session?.user.email){
     await SigineForm({name:session.user?.name,email:session.user?.email,password:"dmeo"}) 
  }
   
  return  (
    <div  className={`flex md:flex-row flex-col  `}>
   
        <div className="  md:w-[20%] w-full px-2 py-6 shadow-xl  ">
        <h2 className="flex  mb-10 items-center gap-2 "> <span className="block font-medium text-xl">{session?.user?.name}</span> </h2>
         < SidebarList  />
        </div>
        <div className="md:w-[80%] w-full">
           {children}
        </div>
    </div>
  )
}

export default layout

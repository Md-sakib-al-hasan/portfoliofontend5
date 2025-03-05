


"use client"

import { IoMdSearch } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getalldata } from "@/components/hooks/getalldata";
import { TMessage } from "@/types";
import ClipLoader from "react-spinners/ClipLoader";






const Dashboardpage = () => {
  const { register, watch } = useForm();
  const searchValue = watch("search");
  const [sort,setSort] = useState("-createdAt")
  const [loading,setloading] = useState<boolean>(true);
  const [result, setResult] = useState<TMessage[]>([]);




  const fetchData = useCallback(async () => {
  
    try {
      const data = await getalldata(sort, searchValue,"/message/get-all-message"); 

      if (data) {
        
        setResult(data.reulst);
        setloading(false)
      }
    } catch (error) {
      toast.error( (error as Error).message || "Something is wrong")
      
    }
   },[searchValue,sort])
 
  useEffect(() => {

    fetchData();

  }, [fetchData]); 

  return (
    <div>
     
     <div className="flex items-center justify-center">
     <ClipLoader
          color={"red"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> 
     </div>
      <div className="shadow-xl w-full rounded-lg bg-[#f8faff] p-6">
        <h2 className="text-xl font-semibold dark:text-customDark">All message</h2>
        <div className="flex items-center justify-end mt-4">
          <div className="relative flex items-center">
            <input
              type="text"
              {...register('search')}
              placeholder="Search projects..."
              className="py-2 pl-4 w-60 bg-white text-black placeholder:text-sm border border-gray-300 rounded-xl focus:outline-none"
            />
            <IoMdSearch className="absolute right-3 text-gray-500 text-xl" />
            <div className="relative md:flex items-center pl-4  hidden ">
              <div className="w-full flex py-3 px-4 border border-gray-300 rounded-xl focus:outline-none">
                <h2 className="text-sm text-gray-400">shortby:</h2>
                <select  onChange={(e) => setSort(e.target.value)} className="text-sm bg-white text-gray-400/80 font-semibold focus:outline-none">
                  <option  value="-createdAt"  >Ass</option>
                  <option  value="createdAt">Dre</option>
                </select>
              </div>
            </div>
          </div>
         </div>
        <div className="overflow-x-auto mt-10">
          <ul className="bg-white shadow-md rounded-lg overflow-hidden">
            <li className=" hidden md:grid grid-cols-[1fr_2fr_3fr] p-3 text-center bg-gray-100 text-gray-600 font-semibold">
              <span>Name</span>
              <span>Email</span>
              <span className="hidden sm:block">Descriptions</span>
            </li>

            { result?.map((item:TMessage, index) => (
             <li key={index} className="grid space-y-2 md:grid-cols-[1fr_2fr_3fr] items-center p-3 text-center shadow-xl hover:bg-gray-50 text-gray-700">
             
             
             <div className="flex items-center justify-center">
               <span className="block">{item.name}</span>
             </div>
             <div className="flex items-center justify-center">
               <span className="block">{item.email}</span>
             </div>
             
             <div className="hidden sm:flex items-center justify-center">
               <span>{item.description}</span>
             </div>
             
            
           </li>
           
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboardpage;

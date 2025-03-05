"use client"
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { MdOutlineAddToQueue } from "react-icons/md";
import { TbStackFront } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import toast from "react-hot-toast";
import { deleteSingleitem } from "@/components/hooks/deletesingleitem";
import { getalldata } from "@/components/hooks/getalldata";
import { TBlog } from "@/types";




const Blogpage = () => {
  const { register, watch } = useForm();
  const searchValue = watch("search");
  const [sort,setSort] = useState("-createdAt")
  const [loading,setloading] = useState<boolean>(true);
   const [result, setResult] = useState<TBlog[]>([]);
   const [total,settotal] = useState<number>(0) 



  const fetchData = useCallback(async () => {

       
    try {
      const data = await getalldata(sort, searchValue,"/blog/get-all-blog"); 
      if (data) {
        settotal(data.totoal);
        setResult(data.reulst);
        setloading(false)
      }
    } catch (error) {
      toast.error(  (error as Error).message || "Something is wrong")
      
    }
  },[searchValue,sort])

  const handleDelete = async (id: number | string) => {
     
    try{
         await deleteSingleitem(id,"/blog/delete-blog")
         toast.success("successfulley delte project")
         fetchData()
    }catch(err){
      toast.error(  (err as Error).message || "Something is wrong")
    }
} 

  useEffect(() => {

    fetchData();

  }, [fetchData]); 

     
  return (
    <div>
      <ul className="md:flex justify-between">
         
      <li className="shadow-xl lg:px-6 md:px-2 py-8 px-8 rounded-md">
          <span className="flex justify-between gap-20 lg:items-center items-start">
            <span className="bg-blue-400 dark:bg-customBlue text-white px-3 rounded-md py-3 ">
              <TbStackFront size={25} />
            </span>
            <span className="flex flex-col gap-2">
              <h4 className="lg:text-xl md:text-md font-medium ">Vidoes</h4>
              <span className="lg:text-3xl text-2xl font-semibold">
                <span className="hover:text-red-400 cursor-pointer">
                    {total}
                </span>
              </span>
            </span>
          </span>
        </li>
        
        <li className="shadow-xl lg:px-6 md:px-2 py-8 px-8 rounded-md">
          <span className="flex justify-between gap-20 lg:items-center items-start">
            <span className="bg-blue-400 dark:bg-customBlue  text-white px-3 rounded-md py-3">
              <MdOutlineAddToQueue size={25} />
            </span>
            <span className="flex flex-col gap-2 text-right">
              <h4 className="lg:text-xl md:text-md font-medium">Add project</h4>
              <span className="lg:text-3xl text-2xl font-semibold  hover:text-red-400 dark:text-customBlue"><Link href="/drashboard/blog/addBlog">Add</Link></span>
            </span>
          </span>
        </li>

       
      </ul>
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
        <h2 className="text-xl font-semibold dark:text-customDark">All Blog</h2>
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
            <li className=" hidden md:grid grid-cols-[1fr_3fr_2fr_1fr_1fr] p-3 text-center bg-gray-100 text-gray-600 font-semibold">
              <span>Project img</span>
              <span>Title</span>
              <span className="hidden sm:block">Subject</span>
              <span>Update</span>
              <span className="text-center mx-10">Delete</span>
            </li>

            {result?.map((item:TBlog, index) => (
             <li key={index} className="grid space-y-2 md:grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center p-3 text-center shadow-xl hover:bg-gray-50 text-gray-700">
             <Image src={item.imgurl} className=" object-cover md:w-[50px] md:h-[50px]" alt="img" width={400} height={400} />
             
             <div className="flex items-center justify-center">
               <span className="block">{item.title}</span>
             </div>
             
             <div className="hidden sm:flex items-center justify-center">
               <span>{item.subject}</span>
             </div>
             
             <div className="flex items-center justify-center">
               <span className="bg-blue-400 text-white text-center py-1 rounded-md px-4 md:w-auto w-full">
                 <Link href={`/drashboard/blog/updateBlog/${item._id}`}>Update</Link>
               </span>
             </div>
             
             <div className="flex items-center justify-center md:mx-5 cursor-pointer ">
               <span onClick={() => handleDelete(item._id)} className="bg-red-400 text-white text-center py-1 rounded-md px-4 md:w-auto w-full">
                 Delete
               </span>
             </div>
           </li>
           
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Blogpage;
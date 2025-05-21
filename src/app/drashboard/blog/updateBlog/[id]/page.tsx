"use client"
import update from "@/actions/update";
import Choicefile, { Tchoicefile } from "@/components/customUi/from/choicefile"
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

type Tdescriptions = {
  title:string |null,
  subject:string | null,
  description:string |null,
}


const userSchema = z.object({
  title:z.union([ z.string().min(2, "Title must be at least 2 characters").optional(), z.string().length(0)]),
  subject:z.union([z.string().min(2, "Title must be at least 2 characters").optional(), z.string().length(0)]) ,
  description:z.union([z.string().min(20, "Enter a project description of at least 20 characters").optional(), z.string().length(0)]) 
});


const UpdateBlog = () => {
     
      const {id} = useParams()
      
      const [file, setfile] = useState<Tchoicefile | null>(null);
      const [description, setDescription] = useState<Tdescriptions | null>(null);
      const {register,handleSubmit,formState: { errors },reset } = useForm({resolver: zodResolver(userSchema),});
  
  const handledatabasesave= async () => {
    const newBlog = {
      title:description?.title,
      subject:description?.subject,
      description:description?.description,
      imgurl:file?.imgurl,
      videourl:file?.videourl
}
const cleanedNewBlog = Object.fromEntries(
  Object.entries(newBlog).filter(([_, v]) => v !== undefined && v !== null && v !== "") // eslint-disable-line @typescript-eslint/no-unused-vars
);

try {
  const result = await update(cleanedNewBlog, "/blog/update-blog",id as string); 

  if (result.error) {
    toast.error("Error: " + result.error); 
  } else {
    toast.success("Blog update successfully!");
  }
} catch (error) {
  toast.error("Error during API request: " + (error as Error).message);
}

  }      

  const onSubmit = async (data: FieldValues) => {
         
          if(!data){
            return
          }

            setDescription(data  as Tdescriptions)
 

    reset();

  
  };
     
  return (
    <div>
      <Choicefile  setdata={ setfile} />
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-4 shadow-lg">
      <Toaster />
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        <div className="space-y-2">
          <label className="text-black">Title:</label>
          <input {...register("title")} placeholder="Title" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
          {errors.title && <p className="text-red-500 text-sm">{String(errors.title.message)}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-black">Subject</label>
          <input {...register("subject")} placeholder="subject" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
          {errors.subject && <p className="text-red-500 text-sm">{String(errors.subject.message)}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-black">Description:</label>
          <textarea {...register("description")} className="border border-gray-400 p-2 w-full bg-white text-black rounded-md focus:outline-none" rows={4}></textarea>
          {errors.description && <p className="text-red-500 text-sm">{String(errors.description.message)}</p>}
        </div>

      
      </div>

      <div className="w-3/12 mt-5">
       
         <button type="submit" className="bg-red-400 py-2 px-10 my-4 rounded-md text-white" >Update</button> 
       
      </div>
    </form>
    <ul  className="bg-[#f8faff] mx-auto p-4 shadow-lg text-center">
      
          <li className={`${file === null?"text-black":"text-green-400" }`}>image and vidoes successfully update</li>
          <li className={`${description === null?"text-black":"text-green-400" }`}>Link successfully update</li>

          <div className=" mt-5 md:flex justify-between space-y-4 text-white">
            <button onClick={handledatabasesave} className="py-2 px-3 bg-red-400 rounded-md">To permanetly update your project clicked here</button>
            <button className="py-2 px-3 bg-red-400 rounded-md"><Link href={"/drashboard"}>if you dont went to update cliked here</Link></button>
          </div>
        </ul>
    </div>
  )
}

export default UpdateBlog

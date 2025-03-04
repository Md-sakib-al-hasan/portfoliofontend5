"use client"
import create from "@/actions/create";
import Choicefile, { Tchoicefile } from "@/components/customUi/from/choicefile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";



const userSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").optional(),
  subject: z.string().min(2, "Title must be at least 2 characters").optional(),
  description: z.string().min(20, "Enter a project description of at least 20 characters").optional(),
});


const Addblogpage = () => {
      

     
      const [file, setfile] = useState<Tchoicefile | null>(null);
      const {register,handleSubmit,formState: { errors },reset } = useForm({resolver: zodResolver(userSchema),});



  const onSubmit = async (data: FieldValues) => {


    const newBlog = {
          title:data?.title,
          subject:data?.subject,
          description: data?.description,
          imgurl:file?.imgurl,
          videourl:file?.videourl
    }
    const cleanedNewBlog = Object.fromEntries(
      Object.entries(newBlog).filter(([_, v]) =>  v !== undefined && v !== "")
    );
    try {
      const result = await create(cleanedNewBlog, "/blog/create-blog"); 
       console.log(result)
      if (result.error) {
        toast.error("Error: " + result.error); 
      } else {
        toast.success("Blog saved successfully!");
      }
    } catch (error: any) {
      toast.error("Error during API request: " + error.message);
    }



    reset();

    console.log(newBlog);
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

      <div className="w-3/12 mt-5 text-white">
       {
         file?.imgurl && file?.videourl  ? <button type="submit" className="bg-red-400 py-2 px-10 my-4 rounded-md" >Submite</button> :<span onClick={() =>  toast.success("Fires update imge and vioes then cliek here ")}  className="bg-red-400 py-4 px-10 my-4 rounded-md" >Submite disable</span>
       }
    
       
      </div>
    </form>
    </div>
  )
}

export default Addblogpage

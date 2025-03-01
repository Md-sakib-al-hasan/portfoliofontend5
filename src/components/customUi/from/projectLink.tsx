import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import SelectOptions, { OptionType } from './Selectopion';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

const userSchema = z.object({
  fontendlink: z.string().min(2, "Title must be at least 2 characters").optional(),
  backendlink: z.string().min(2, "Title must be at least 2 characters").optional(),
  fontendsourcelink: z.string().min(2, "Title must be at least 2 characters").optional(),
  backendsourcelink: z.string().min(2, "Title must be at least 2 characters").optional(),
 
});



const ProjectLink = ({setdata, projectstatus,setpgecontroller}:{ setpgecontroller:() => void,projectstatus:Boolean,setdata: (data: any) => void  }) => {
    

    const {register,handleSubmit,formState: { errors },  reset} = useForm({
        resolver: zodResolver(userSchema),
      });
    
      const onSubmit = async (data: FieldValues) => {
          setdata(data)
          toast.success(" upload Rource code  and Live link  successfully");
          reset();
      };

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-4 shadow-lg">
       <Toaster/>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        <div className="space-y-2">
          <label className="text-black">Fronted Live Link :</label>
          <input {...register("fontendlink")} placeholder="live linke" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
          {errors.fontendlink && <p className="text-red-500 text-sm">{String(errors.fontendlink.message)}</p>}
        </div>

       {
        projectstatus?  <div className="space-y-2">
        <label className="text-black">Backend Live Llink:</label>
        <input {...register("backendlink")} placeholder="live links" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
        {errors.backendlink && <p className="text-red-500 text-sm">{String(errors.backendlink.message)}</p>}
      </div> : ""
       }
        <div className="space-y-2">
          <label className="text-black">Fronted Source  Link :</label>
          <input {...register("fontendsourcelink")} placeholder="soruce code" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
          {errors.fontendsourcelink && <p className="text-red-500 text-sm">{String(errors.fontendsourcelink.message)}</p>}
        </div>

       {
        projectstatus? <div className="space-y-2">
        <label className="text-black">Backend Source Llink:</label>
        <input {...register("backendsourcelink")} placeholder="source code" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
        {errors.backendsourcelink && <p className="text-red-500 text-sm">{String(errors.backendsourcelink.message)}</p>}
      </div>:""
       }

        
      </div>

      <div className="w-3/12 mt-5">
        <button onClick={ setpgecontroller} className="py-2 px-3 bg-red-400 rounded-md"> upload</button>
      </div>
    </form>
    </div>
  )
}

export default ProjectLink

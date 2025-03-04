import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { TProjectLink } from '@/app/drashboard/addproject/page';

const userSchema = z.object({
  fontendlink: z.union([z.string().url("Invalid frontend URL"), z.string().length(0)]).optional(),
  backendlink: z.union([z.string().url("Invalid backend URL"), z.string().length(0)]).optional(),
  fontendsourcelink: z.union([z.string().url("Invalid frontend source URL"), z.string().length(0)]).optional(),
  backendsourcelink: z.union([z.string().url("Invalid backend source URL"), z.string().length(0)]).optional(),
});


const ProjectLink = ({setdata, projectstatus}:{ projectstatus:boolean,setdata: (data: TProjectLink) => void  }) => {
    

    const {register,handleSubmit,formState: { errors },  reset} = useForm({
        resolver: zodResolver(userSchema),
      });
    
      const onSubmit = async (data: FieldValues) => {
          setdata({backendlink:data?.backendlink,backendsourcelink:data?.backendsourcelink,fontendlink:data?.fontendlink,fontendsourcelink:data?.fontendsourcelink})
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
        <button  className="py-2 px-3 bg-red-400 rounded-md text-white"> upload</button>
      </div>
    </form>
    </div>
  )
}

export default ProjectLink

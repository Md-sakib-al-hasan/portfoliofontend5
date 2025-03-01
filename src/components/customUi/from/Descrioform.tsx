import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import SelectOptions, { OptionType } from './Selectopion';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

const userSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").optional(),
  description: z.string().min(20, "Enter a project description of at least 20 characters").optional(),
  details: z.string().min(20, "Enter project details of at least 20 characters").optional(),
});

const Statusoptions = [
    { value: "fullStack", label: "Full Stack" },
    { value: "frontEnd", label: "Front End" },
  ];


const Descrioform = ({setdata, setprojectstatus,setpgecontroller}:{setpgecontroller:() => void,setdata:(data: any) => void, setprojectstatus: (data: any) => void  }) => {
     const [statusValue, setStatusValue] = useState<OptionType | null>(null);

    const {register,handleSubmit,formState: { errors },  reset} = useForm({
        resolver: zodResolver(userSchema),
      });
    
      const onSubmit = async (data: FieldValues) => {
        let imgUrl = null;
        let videoUrl = null;
        setprojectstatus(statusValue?.value ==="frontEnd"? false: true)
        setdata({ ...data, status:statusValue?.value})
        toast.success(" upload Descriptins successfully");
        reset();
       
      };

  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-4 shadow-lg">
       <Toaster/>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        <div className="space-y-2">
          <label className="text-black">Title:</label>
          <input {...register("title")} placeholder="Title" className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" />
          {errors.title && <p className="text-red-500 text-sm">{String(errors.title.message)}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-black">Category:</label>
          <SelectOptions options={Statusoptions} setSelectValue={setStatusValue} />
        </div>

       

        <div className="space-y-2">
          <label className="text-black">Description:</label>
          <textarea {...register("description")} className="border border-gray-400 p-2 w-full bg-white text-black rounded-md focus:outline-none" rows={4}></textarea>
          {errors.description && <p className="text-red-500 text-sm">{String(errors.description.message)}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-black">Details:</label>
          <textarea {...register("details")} className="border border-gray-400 p-2 w-full bg-white text-black rounded-md focus:outline-none" rows={4}></textarea>
          {errors.details && <p className="text-red-500 text-sm">{String(errors.details.message)}</p>}
        </div>
      </div>

      <div className="w-3/12 mt-5">
        <button  onClick={ setpgecontroller} className="py-2 px-3 bg-red-400 rounded-md"> Upload</button>
      </div>
    </form>
    </div>
  )
}

export default Descrioform

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

const userSchema = z.object({
  features: z.array(
    z.object({
      title: z.string().min(2, "Title must be at least 2 characters"),
      description: z.string().min(20, "Enter a project description of at least 20 characters"),
    })
  ).min(1, "At least one feature is required"), 
});

const Specialfetured = ({ setSpecial, title,setpgecontroller }: {setpgecontroller:() => void,title:string ,setSpecial: (data: any) => void }) => {
  const { register, handleSubmit, control, formState: { errors },  reset } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      features: [{ title: "", description: "" }],
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit = (data: any) => {
    setSpecial(data);
    toast.success(` upload  ${title} successfully`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-4 shadow-lg">
       <Toaster/>
      <h4 className="text-black text-center text-lg py-4">{title}</h4>
      
      <div className="text-black flex justify-between items-center">
        <button type="button" onClick={() => append({ title: "", description: "" })} className="py-4 font-semibold">Add</button>
        <button type="button" onClick={() => fields.length > 1 && remove(fields.length - 1)} className="py-4 text-black font-semibold">Remove</button>
      </div>

      <div className="">
        {fields.map((field, index) => (
          <div key={field.id} className='grid gap-4 md:grid-cols-2 grid-cols-1 ' >
            {/* Title Field */}
             <div className="py-2">
               <input 
              {...register(`features.${index}.title`)} 
              placeholder="Title" 
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" 
            />
            {errors.features?.[index]?.title && <p className="text-red-500 text-sm">{errors.features[index].title.message}</p>}
             </div>
            
            {/* Description Field */}
            <div className="py-2">
            <input 
              {...register(`features.${index}.description`)} 
              placeholder="Description" 
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none" 
            />
            {errors.features?.[index]?.description && <p className="text-red-500 text-sm">{errors.features[index].description.message}</p>}
            </div>
          </div>
        ))}
      </div>

      <button  onClick={setpgecontroller} type="submit" className="bg-red-400 text-white py-2 px-10 mt-4 rounded">uplaod</button>
    </form>
  );
};

export default Specialfetured;

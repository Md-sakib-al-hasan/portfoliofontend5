"use client"
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import create from "@/actions/create";
import toast, { Toaster } from "react-hot-toast";
import { getalldata } from "../hooks/getalldata";
import { MdModeComment } from "react-icons/md";



const commentSchema = z.object({
  comment: z.string().min(1, "Comment cannot be empty"),
});

export default function CommentSection({id}:{id:string}) {
  const [commentlist,setcommentlist] = useState<{comment:string,_id:string}[]>([]);
  console.log(commentlist)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });
  const fetchData = async () => {
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/comment/get-all-comment?blogid=${id}`)
      const data = await response.json()
      
      if (data) {
        setcommentlist(data.data.result)
       
      }
    } catch (error) {
      toast.error("Something is wrong")
      
    }
  };

  const onSubmit = async (data:FieldValues) => {
     const newcomment ={
      comment:data?.comment,
      blogid:id
     }

    try {
      const result = await create(newcomment, "/comment/create-comment"); 
       console.log(result)
      if (result.error) {
        toast.error("Error: " + result.error); 
      } else {
        fetchData()
        toast.success("comment successfully Done");
      }
    } catch (error: any) {
      toast.error("Error during API request: " + error.message);
    }
    console.log(data);
    reset();
    
    console.log(commentSchema)
    reset();
  };

  useEffect(() => {
      fetchData()
  }, [])
  

  return (
   <div>
     <div className=" mx-auto p-4">
      <Toaster/>
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4">
        <div className="flex flex-col w-full">
          <Input
            type="text"
            {...register("comment")}
            placeholder="Add a comment..."
            className="dark:bg-[#111826]"
          />
          {errors.comment && (
            <span className="text-red-500 text-sm">{errors.comment.message}</span>
          )}
        </div>
        <Button type="submit">Post</Button>
      </form>
      
    </div>
      <div>
      <div className="p-6  mx-auto bg-white text-black shadow-2xl rounded-2xl border border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-700">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-black dark:text-white">
        <MdModeComment className="text-3xl text-gray-700 dark:text-gray-300" /> Comments
      </h2>
      <ul className="space-y-3">
        {commentlist?.map((comment:{comment:string,_id:string}) => (
          <li
            key={comment?._id}
            className="p-4 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
          >
            {comment?.comment}
          </li>
        ))}
      </ul>
    </div>
      </div>
   </div>
  );
}
"use client"
import { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import create from "@/actions/create";
import toast, { Toaster } from "react-hot-toast";
import { MdModeComment } from "react-icons/md";



const commentSchema = z.object({
  comment: z.string().min(1, "Comment cannot be empty"),
});

export default function CommentSection({ blogId}:{ blogId:string}) {
  const [commentlist,setcommentlist] = useState<{comment:string,_id:string}[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });
  const fetchData = useCallback( async () => {
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/comment/get-all-comment?blogid=${blogId}`)
      const data = await response.json()
      
      if (data) {
        setcommentlist(data.data.result)
       
      }
    } catch (error) {
      toast.error(  (error as Error).message ||"Something is wrong")
      
    }
  },[blogId])

  
  const onSubmit = async (data:FieldValues) => {
     const newcomment ={
      comment:data?.comment,
      blogid:blogId
     }

    try {
      const result = await create(newcomment, "/comment/create-comment"); 

      if (result.error) {
        toast.error("Error: " + result.error); 
      } else {
        fetchData()
        toast.success("comment successfully Done");
      }
    } catch (error) {
      toast.error("Error during API request: " + (error as Error).message);
    }

    reset();
    

    reset();
  };

  useEffect(() => {
      fetchData()
  }, [fetchData])
  

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
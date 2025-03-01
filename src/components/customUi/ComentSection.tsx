"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const commentSchema = z.object({
  comment: z.string().min(1, "Comment cannot be empty"),
});

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = (data:any) => {
    setComments([...comments, data.comment]);
    console.log(commentSchema)
    reset();
  };

  return (
    <div className=" mx-auto p-4">
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
      <div>
        {comments.map((comment, index) => (
          <Card key={index} className="mb-2">
            <CardContent className="p-2">{comment}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
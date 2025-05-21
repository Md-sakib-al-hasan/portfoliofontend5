"use client"
import create from "@/actions/create"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

import { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { z } from "zod"

// Define the course schema with all fields optional but validated when present
const courseSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).optional(),
  provider: z.string().min(2, { message: "Provider must be at least 2 characters" }).optional(),
  period: z.string().min(2, { message: "Period must be at least 2 characters" }).optional(),
  description: z.string().min(10, { message: "Description must be at least 10 characters if provided" }).optional(),
})

// Type for the form data
type TCourseData = z.infer<typeof courseSchema>

const CreateCourse = () => {
 
  const [courseData, setCourseData] = useState<TCourseData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TCourseData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: "",
      provider: "",
      period: "",
      description: "",
    },
  })

  const handleDatabaseSave = async () => {
    if (!courseData) {
      toast.error("No changes to update")
      return
    }

    // Remove undefined, null, or empty string values
    const cleanedCourseData = Object.fromEntries(
      Object.entries(courseData).filter(([_, v]) => v !== undefined && v !== null && v !== ""),
    )

    try {
    
      const result = await create(cleanedCourseData, "/course/create-course",)
      console.log(result)
      if(result.success){
            toast.success("Course updated successfully!")
            reset()
      }
      
     
    } catch (error) {
      toast.error("Error during API request: " + (error as Error).message)
    }
  }

  const onSubmit = async (data: TCourseData) => {
    if (!data) {
      return
    }

    setCourseData(data)
    toast.success("Form data collected. Click 'Update' to save changes.")
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Update Course</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-6 shadow-lg rounded-lg mt-6">
        <Toaster />

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-black font-medium">Course Name:</label>
            <input
              {...register("name")}
              placeholder="e.g. Web Development Level One"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Provider:</label>
            <input
              {...register("provider")}
              placeholder="e.g. Programming Hero"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.provider && <p className="text-red-500 text-sm">{errors.provider.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Period:</label>
            <input
              {...register("period")}
              placeholder="e.g. Complete Course"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.period && <p className="text-red-500 text-sm">{errors.period.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Description:</label>
            <textarea
              {...register("description")}
              placeholder="Course description"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              rows={4}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="bg-red-400 py-2 px-6 rounded-md text-white hover:bg-red-500 transition">
            Collect Changes
          </button>
        </div>
      </form>

      <div className="bg-[#f8faff] mx-auto p-6 shadow-lg rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Update Status</h2>
        <ul className="space-y-2">
          <li className={`${courseData === null ? "text-black" : "text-green-500 font-medium"}`}>
            {courseData === null ? "No course data collected" : "✓ Course data ready to update"}
          </li>
        </ul>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={handleDatabaseSave}
            className={`py-2 px-6 rounded-md text-white transition ${courseData ? "bg-red-400 hover:bg-red-500" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!courseData}
          >
            Save Changes
          </button>
          <Link
            href="/dashboard"
            className="py-2 px-6 bg-gray-500 rounded-md text-white hover:bg-gray-600 transition text-center"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateCourse;

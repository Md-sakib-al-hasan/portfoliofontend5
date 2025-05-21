"use client"
import create from "@/actions/create"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { z } from "zod"

// Define the education schema with all fields optional but validated when present
const educationSchema = z.object({
  degree: z.string().min(2, { message: "Degree must be at least 2 characters" }).optional(),
  institution: z.string().min(2, { message: "Institution must be at least 2 characters" }).optional(),
  year: z.string().min(2, { message: "Period must be at least 2 characters" }).optional(),
  description: z.string().min(10, { message: "Description must be at least 10 characters if provided" }).optional(),
})

// Type for the form data
type TEducationData = z.infer<typeof educationSchema>

const CreateEducation = () => {
  const [educationData, setEducationData] = useState<TEducationData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEducationData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      degree: "",
      institution: "",
      year: "",
      description: "",
    },
  })

  const handleDatabaseSave = async () => {
    if (!educationData) {
      toast.error("No education data to save")
      return
    }

    // Remove undefined, null, or empty string values
    const cleanedEducationData = Object.fromEntries(
      Object.entries(educationData).filter(([_, v]) => v !== undefined && v !== null && v !== ""),
    )

    try {
      const result = await create(cleanedEducationData, "/education/create-education")
      
      if (result.success) {
        toast.success("Education entry created successfully!")
        reset()
        setEducationData(null)
      } else {
        toast.error("Failed to create education entry")
      }
    } catch (error) {
      toast.error("Error during API request: " + (error as Error).message)
    }
  }

  const onSubmit = async (data: TEducationData) => {
    if (!data) {
      return
    }

    setEducationData(data)
    toast.success("Form data collected. Click 'Save' to create education entry.")
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Add Education</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-6 shadow-lg rounded-lg mt-6">
        <Toaster />

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-black font-medium">Degree:</label>
            <input
              {...register("degree")}
              placeholder="e.g. Diploma in Computer Science & Engineering"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.degree && <p className="text-red-500 text-sm">{errors.degree.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Institution:</label>
            <input
              {...register("institution")}
              placeholder="e.g. City Institute of Technology"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.institution && <p className="text-red-500 text-sm">{errors.institution.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Period:</label>
            <input
              {...register("year")}
              placeholder="e.g. 2020 - 2024"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Description:</label>
            <textarea
              {...register("description")}
              placeholder="e.g. Focused on web development and programming fundamentals."
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              rows={4}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="bg-red-400 py-2 px-6 rounded-md text-white hover:bg-red-500 transition">
            Collect Data
          </button>
        </div>
      </form>

      <div className="bg-[#f8faff] mx-auto p-6 shadow-lg rounded-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Submission Status</h2>
        <ul className="space-y-2">
          <li className={`${educationData === null ? "text-black" : "text-green-500 font-medium"}`}>
            {educationData === null ? "No education data collected" : "✓ Education data ready to save"}
          </li>
        </ul>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={handleDatabaseSave}
            className={`py-2 px-6 rounded-md text-white transition ${educationData ? "bg-red-400 hover:bg-red-500" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!educationData}
          >
            Save Education
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

export default CreateEducation

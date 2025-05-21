"use client"
import update from "@/actions/update"
import Choicefile, { type Tchoicefile } from "@/components/customUi/from/choicefile"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { z } from "zod"

// Define the blog schema with all fields optional but validated when present
const blogSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).optional(),
  excerpt: z.string().min(1, { message: "Excerpt is required" }).optional(),
  subject: z.string().min(1, { message: "Subject is required" }).optional(),
  date: z.string().min(1, { message: "Date is required" }).optional(),
  readTime: z.string().min(1, { message: "Read time is required" }).optional(),
  category: z.string().min(1, { message: "Category is required" }).optional(),
  author: z
    .object({
      name: z.string().min(1, { message: "Author name is required" }).optional(),
    })
    .optional(),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }).optional(),
  content: z.string().min(1, { message: "Content is required" }).optional(),
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }).optional(),
  isPublished: z.boolean().optional(),
  isDelete: z.boolean().optional(),
})

// Type for the form data
type TBlogData = z.infer<typeof blogSchema>

const UpdateBlog = () => {
  const { id } = useParams()
  const [file, setFile] = useState<Tchoicefile | null>(null)
  const [blogData, setBlogData] = useState<TBlogData | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TBlogData>({
    resolver: zodResolver(blogSchema),
  })

  const handleDatabaseSave = async () => {
    if (!blogData && !file) {
      toast.error("No changes to update")
      return
    }

    const newBlog = {
      ...blogData,
      imgurl: file?.imgurl,
      videourl: file?.videourl,
      tags: tags.length > 0 ? tags : undefined,
    }

    // Remove undefined, null, or empty string values
    const cleanedNewBlog = Object.fromEntries(
      Object.entries(newBlog).filter(([_, v]) => {
        if (typeof v === "object" && v !== null) {
          return Object.keys(v).length > 0
        }
        return v !== undefined && v !== null && v !== ""
      }),
    )

    try {
      const result = await update(cleanedNewBlog, "/text/update-blog", id as string)

      if (result.error) {
        toast.error("Error: " + result.error)
      } else {
        toast.success("Blog updated successfully!")
      }
    } catch (error) {
      toast.error("Error during API request: " + (error as Error).message)
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const onSubmit = async (data: TBlogData) => {
    if (!data) {
      return
    }

    // Include tags in the data
    const dataWithTags = {
      ...data,
      tags: tags.length > 0 ? tags : undefined,
    }

    setBlogData(dataWithTags)
    toast.success("Form data collected. Click 'Update' to save changes.")
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Update text Blog Post</h1>

      <Choicefile setdata={setFile} isshowvidoes={true} />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#f8faff] mx-auto p-6 shadow-lg rounded-lg mt-6">
        <Toaster />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Information */}
          <div className="space-y-2">
            <label className="text-black font-medium">Title:</label>
            <input
              {...register("title")}
              placeholder="Blog title"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Subject:</label>
            <input
              {...register("subject")}
              placeholder="Blog subject"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Excerpt:</label>
            <input
              {...register("excerpt")}
              placeholder="Short excerpt"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Category:</label>
            <input
              {...register("category")}
              placeholder="Blog category"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Date:</label>
            <input
              type="date"
              {...register("date")}
              className="border text-black border-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Read Time:</label>
            <input
              {...register("readTime")}
              placeholder="e.g. 5 min read"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.readTime && <p className="text-red-500 text-sm">{errors.readTime.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-black font-medium">Author Name:</label>
            <input
              {...register("author.name")}
              placeholder="Author name"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            {errors.author?.name && <p className="text-red-500 text-sm">{errors.author.name.message}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-black font-medium">Tags:</label>
            <div className="flex gap-2">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add a tag"
                className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <button
                type="button"
                onClick={addTag}
                className="bg-red-400 py-2 px-4 rounded-md text-white hover:bg-red-500 transition"
              >
                Add
              </button>
            </div>

            {/* Display tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center">
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="ml-1 text-red-800 hover:text-red-900">
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-black font-medium">Description:</label>
            <textarea
              {...register("description")}
              placeholder="Short description (min 20 characters)"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              rows={3}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-black font-medium">Content:</label>
            <textarea
              {...register("content")}
              placeholder="Full blog content"
              className="border text-black border-gray-400 placeholder:text-gray-400 bg-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
              rows={6}
            ></textarea>
            {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
          </div>

          <div className="space-y-2 flex items-center gap-4">
            <label className="text-black font-medium">Published:</label>
            <input
              type="checkbox"
              {...register("isPublished")}
              className="h-5 w-5 rounded border-gray-300 text-red-400 focus:ring-red-300"
            />
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
          <li className={`${file === null ? "text-black" : "text-green-500 font-medium"}`}>
            {file === null ? "No media files selected" : "✓ Media files ready to update"}
          </li>
          <li className={`${blogData === null ? "text-black" : "text-green-500 font-medium"}`}>
            {blogData === null ? "No blog data collected" : "✓ Blog data ready to update"}
          </li>
        </ul>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={handleDatabaseSave}
            className={`py-2 px-6 rounded-md text-white transition ${blogData || file ? "bg-red-400 hover:bg-red-500" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!blogData && !file}
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

export default UpdateBlog

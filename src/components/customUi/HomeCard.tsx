"use client"

import Image from "next/image"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"

type TCardProps = {
  imgurl: string
  livelink: string
  id: string
  title: string
  description: string
}

const HomeCard = ({ imgurl, livelink, id, title, description }: TCardProps) => {
  return (
    <div className="group h-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      {/* Image container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imgurl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top right corner badge */}
        <Link
          href={`/projects/${id}`}
          className="absolute right-3 top-3 opacity-0 transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-400 shadow-md transition-transform duration-300 hover:rotate-12 dark:bg-customBlue">
            <GoArrowUpRight size={20} className="text-white dark:text-customDark" />
          </div>
        </Link>
      </div>

      {/* Content area */}
      <div className="flex flex-col p-5">
        <h3 className="mb-2 line-clamp-1 text-lg font-bold tracking-tight">{title}</h3>

        {/* Description with line-clamp-2 */}
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>

        {/* Buttons with improved design */}
        <div className="mt-auto flex flex-wrap gap-3">
          <Link href={livelink} className="group/button inline-flex">
            <span className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-red-400 hover:text-white dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-customBlue dark:hover:text-customDark">
              Live Demo
              <GoArrowUpRight
                className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                size={16}
              />
            </span>
          </Link>

          <Link href={`/projects/${id}`} className="group/button inline-flex">
            <span className="inline-flex items-center gap-1 rounded-lg border border-red-400 bg-transparent px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-400 hover:text-white dark:border-customBlue dark:text-customBlue dark:hover:bg-customBlue dark:hover:text-customDark">
              Details
              <GoArrowUpRight
                className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                size={16}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeCard

import Link from "next/link"
import { FileText, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import allget from "@/actions/allget"
import { TDocument } from "@/types"
export  default async function DocumentPage() {
    const result = await allget("/text/get-all-blog",undefined,60)
     const alldocument= result.data.result;
    
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Document Blog</h1>
      <div className="w-20 h-1 bg-red-400 dark:bg-[#00eeff] mx-auto mb-12"></div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {alldocument.map((doc:TDocument) => (
          <div
            key={doc?._id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
          >
             <Image width={500} height={500} src={doc?.coverImage} alt="sakib"/>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-500 dark:bg-[#00eeff]/20 dark:text-[#00eeff]">
                  {doc?.category}
                </span>
                <FileText className="h-5 w-5 text-gray-400" />
                
              </div>
              <h3 className="text-xl font-bold mb-3">{doc?.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{doc.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{doc?.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{doc?.readTime}</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <Link
                href={`/document/${doc?._id}`}
                className="text-red-400 dark:text-[#00eeff] font-medium hover:underline"
              >
                Read Document →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

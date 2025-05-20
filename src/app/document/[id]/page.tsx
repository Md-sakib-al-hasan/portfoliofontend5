import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock, Calendar } from "lucide-react"
import sakib from "../../../../public/sakib3.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import allget from "@/actions/allget"
import { TDocument } from "@/types"




export default async function BlogPostPage({ params }: {params: Promise<{ id: string }>}) {
  const {id} = await params;
     const result = await allget(`/text/getsingle-blog/${id}`,undefined,60);
    const post:TDocument = result?.data;
   
    
    
  
  return (
    <article className="container mx-auto px-4 py-12">
      <Link href="/document" className="inline-block mb-8">
        <Button variant="ghost" className="gap-1 hover:text-red-400 dark:hover:text-[#00D2E0]">
          <ChevronLeft className="h-4 w-4" />
          Back to all posts
        </Button>
      </Link>

      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <Badge className="bg-red-400 hover:bg-red-500 dark:bg-[#00D2E0] dark:hover:bg-[#00B8C4] dark:text-black">
            {post?.category}
          </Badge>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post?.date}>{post?.date}</time>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{post?.readTime}</span>
          </div>
        </div>

        <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">{post?.title}</h1>
        <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mb-8"></div>

        <div className="mb-8 flex items-center gap-4">
          <Avatar>
            <AvatarImage src={sakib.src} alt={post?.author?.name} />
            <AvatarFallback className="bg-red-400 dark:bg-[#00D2E0] text-white dark:text-black">
              {post?.author?.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{post?.author?.name}</div>
            <div className="text-sm text-muted-foreground">Author</div>
          </div>
        </div>

        <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
          <Image src={post?.coverImage || "/placeholder.svg"} alt={post?.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          
            <p>{post?.excerpt}</p>
        
        </div>
      </div>
    </article>
  )
}

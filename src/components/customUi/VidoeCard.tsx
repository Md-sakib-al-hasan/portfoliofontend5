import Link from "next/link"; // Correct import
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

interface VideoCardProps {
  id: string;
  src: string;
  title:string;
  description:string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, src,title,description }) => {
  if (!id || !src) return null;

  return (
     <div>
      <div className="relative group w-[300px] h-[160px] overflow-hidden bg-red-400">
      <Image
        src={src}
        width={300}
        height={160} 
        alt="Video thumbnail"
        priority 
      />
      <Link href={`/blog/${id}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#264871] to-[#4ebdb4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
          <FaPlayCircle size={30} />
        </div>
      </Link>
    </div>
      <div className="py-4">
      <h2  className="text-2lx font-semibold capitalize ">{title}</h2>
       <p className="line-clamp-2">{description}</p>
      </div>
     </div>
  );
};

export default VideoCard;

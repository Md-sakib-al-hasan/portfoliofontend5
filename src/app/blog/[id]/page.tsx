

import allget from '@/actions/allget';
import CommentSection from '@/components/customUi/ComentSection';
import ShowSinglevioes from '@/components/customUi/ShowSinglevioes';
import VideoCard from '@/components/customUi/VidoeCard';
import { TBlog } from '@/types';
import { useRouter } from 'next/navigation';
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const {id} = params;
  const customquery = {id:id}
  const result = await allget("/blog/getsingle-blog",customquery)
  const blog:TBlog = result.data;
  

  return {
    title: blog.title,
    description: blog.description,

  };
}


const Singelvidoes = async({ params }: { params: { id: string } }) => {
 const {id} = params;
  const customquery = {id:id}
  const result = await allget("/blog/getsingle-blog",customquery)
  const blog:TBlog = result.data;
  const sidedata = await allget("/blog/get-all-blog",{limit:4},60)
  const allblog= sidedata.data.result;
  
   
  

      


    return (
        <div className="xl:grid xl:grid-cols-4  gap-5 w-11/12 max-w-[1280px]  mx-auto">
            <div className="col-span-3 ">
            <ShowSinglevioes imgUrl={blog?.imgurl} videoUrl={blog?.videourl} />
             {/* overviewProjects */}
            <div>
      
             <div className={` mb-5`}>
               <h4 className='text-2xl font-bold py-5'>{blog?.title}</h4>
               
                <p>
                  {blog?.description}
                </p>
             </div>


            </div>
             
             
            {/* righ par  */}
             <CommentSection id={id}/>
             
             
            </div>
            <div className="col-span-1 xl:block hidden ">
                       
            <ul className="space-y-8">
            {
        allblog.map((item:TBlog) =>  <li key={item._id}><VideoCard src="https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" title={item.title} description={item.description} id={item._id}/></li> )
    }
         </ul>
                

            
            
            </div>
        </div>
    ); 
}

export default Singelvidoes;
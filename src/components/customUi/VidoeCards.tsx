import React from 'react'
import VideoCard from './VidoeCard';
import allget from '@/actions/allget';
import { TBlog } from '@/types';

export async function generateStaticParams() {
  const result = await allget("/blog/get-all-blog",undefined,60)
     const allblog= result.data.result;
  return allblog.slice(0, 5).map((blog:TBlog) => ({
    id: blog._id,
  }));
}

  
const VidoeCards = async() => {
     const result = await allget("/blog/get-all-blog",undefined,60)
     const allblog= result.data.result;
     console.log(allblog)
  return (
    <ul className="grid grid-cols-4 container mx-auto gap-5 py-20">
    {
        allblog.map((item:TBlog) =>  <li key={item._id}><VideoCard src={item.imgurl} title={item.title} description={item.description} id={item._id}/></li> )
    }
  </ul> 
  )
}

export default VidoeCards

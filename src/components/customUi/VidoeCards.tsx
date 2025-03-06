import React from 'react'
import VideoCard from './VidoeCard';
import allget from '@/actions/allget';
import { TBlog } from '@/types';


  
const VidoeCards = async() => {
     const result = await allget("/blog/get-all-blog",undefined,60)
     const allblog= result.data.result;

  return (
    <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2   mx-auto gap-5 px-5 py-20">
    {
        allblog.map((item:TBlog) =>  <li key={item._id}><VideoCard src={item.imgurl} title={item.title} description={item.description} id={item._id}/></li> )
    }
  </ul> 
  )
}

export default VidoeCards

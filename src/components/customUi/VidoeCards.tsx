import React from 'react'
import VideoCard from './VidoeCard';
import allget from '@/actions/allget';
import { TBlog } from '@/types';


  
const VidoeCards = async() => {
     const result = await allget("/blog/get-all-blog",undefined,60)
     const allblog= result.data.result;

  return (
    <ul className="grid grid-cols-4 container mx-auto gap-5 py-20">
    {
        allblog.map((item:TBlog) =>  <li key={item._id}><VideoCard src={item.imgurl} title={item.title} description={item.description} id={item._id}/></li> )
    }
  </ul> 
  )
}

export default VidoeCards

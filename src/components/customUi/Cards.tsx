
import React from 'react'
import Card from './Card'
import allget from '@/actions/allget';
import { TProject } from '@/types';


export async function generateStaticParams() {
  const result = await allget("/projects/get-all-project",undefined,60)
  const allproject= result.data.result;
  return allproject.slice(0, 5).map((project:TProject) => ({
    id: project._id,
  }));
}

const Cards = async() => {

  const result = await allget("/projects/get-all-project",undefined,60)
  const allproject= result.data.result;
  return (
    <div className='container mx-auto  xl:px-0  px-8 py-14 '>
        <ul className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
         {
          allproject.map((item:TProject) => <li  key={item._id}>< Card title={item.title} dis={item.description} src={item.imgurl} id={item._id}  /></li> )
         }
         </ul>
    </div>
  )
}

export default Cards

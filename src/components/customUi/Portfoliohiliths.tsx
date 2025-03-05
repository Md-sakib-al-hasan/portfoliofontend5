import React from 'react'
import HomeCard from './HomeCard';
import allget from '@/actions/allget';
import { TProject } from '@/types';


const Portfoliohiliths =  async() => {
    const result = await allget("/projects/get-all-project",{limit:8},60)
  const Eightproject= result.data.result;
  return (
    <div className="py-20 space-y-8 xl:px-0 px-8">
            <h2 className="md:text-4xl text-2xl font-semibold text-center capitalize">My portfolio highlights</h2>
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
             {
              Eightproject.map((item:TProject) =>  <li key={item._id}>  <HomeCard title={item.title} imgurl={item.imgurl} livelink={item.frontendLiveLink} id={item._id} /></li>)
             }
            </ul>
       </div>
  )
}

export default Portfoliohiliths;

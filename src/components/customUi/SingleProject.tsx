"use client"
import Image from 'next/image';
import { useState } from 'react';
import {  FaCircle } from 'react-icons/fa';
import ShowSinglevioes from './ShowSinglevioes';
import Link from 'next/link';
import Card from './Card';
import { TProject } from '@/types';
import toast, { Toaster } from 'react-hot-toast';



const SingelCourse =({sidebardata, maindata}:{ maindata:TProject,sidebardata:TProject[]}) => {
     const [activestate,setActivestate] = useState<number>(0)

     console.log(maindata)
     

     

    
      

    
    return (
        <div className="xl:grid xl:grid-cols-4  gap-5 w-11/12 max-w-[1280px]  mx-auto">
            <Toaster/>
            <div className="col-span-3 ">
             <Image height={1000} width={1000} src={maindata?.imgurl} alt="demo" className="w-full object-cover " />
             {/* overviewProjects */}
            <div>
            <ul className='capitalize font-bold sm:text-lg  text-[#131d3b] bg-[#f4f6f9] mt-16 flex justify-evenly items-center text-center flex-wrap'>
                <li onClick={() => setActivestate(0)} className={`relative   after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-red-400 dark:after:bg-customBlue ${activestate== 0?" sm:after:absolute text-gray-500":" after:relative"}`} >
                   overview
                </li>
                <li  className='h-14 w-[1px] bg-gray-200 '></li>
                <li onClick={() => setActivestate(1)} className={`relative  lg:after:left-[-72px] md:after:left-[-50px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-red-400 dark:after:bg-customBlue  ${activestate== 1?" sm:after:absolute text-gray-500":" after:relative"}`}>
                Features & Functionality
                </li>
                <li className='h-14 w-[1px] bg-gray-200 '></li>
                <li onClick={() => setActivestate(2)} className={`relative after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-red-400 dark:after:bg-customBlue  ${activestate== 2?" sm:after:absolute text-gray-500":" after:relative"}`}>
                    Source
                </li>
                <li className='h-14 w-[1px] bg-gray-200 '></li>
                <li onClick={() => setActivestate(3)} className={`relative after:left-[-72px] after:right-[-75px] after:top-[-20px]  after:h-1 after:bg-red-400 dark:after:bg-customBlue ${activestate== 3?" sm:after:absolute text-gray-500":" after:relative"}`}>
                    video
                </li>
             </ul>
             <div className={`${activestate==0?"block":"hidden"} mb-5`}>
               <h4 className='text-2xl font-bold py-5'>{maindata?.title}</h4>
               <p className='pb-5'>{maindata?.details}</p>
                <ul>
                     {
                        maindata?.specialFeatured.map((item,id) =>  <li key={id}>
                        <span className='flex gap-2 items-center text-lg font-bold py-2'><FaCircle  className='dark:text-customBlue text-red-400'/>{item.title}</span>
                        <p className='ml-5'>{item.description}</p>
                    </li>)
                     }
                </ul>
                <h4 className='font-bold text-2xl py-5 '>Description</h4>
                <p>
                  {maindata.description}
                </p>
             </div>
             <div  className={`${activestate==1?"block":"hidden"} mb-5 space-y-10`}>
             <div className='mt-10'>
            <h2 className="text-lg font-semibold text-red-400 dark:text-customBlue">Technologies Used</h2>
            <ul className="list-disc pl-10 cursor-pointer">
                {
                     maindata?.Technologies?.map((item:{title:string,description:string}) => <li key={item.title}>{item.title}:{item.description}</li>)
                }
                
            </ul>
            </div>

            <div className="mt-4">
            <h2 className="text-lg font-semibold text-red-400 dark:text-customBlue">Features</h2>
            <ul className="list-disc pl-10  cursor-pointer">
            {
                     maindata?.featured?.map((item:{title:string,description:string}) => <li key={item.title}>{item.title}:{item.description}</li>)
                }
            </ul>
            </div>
             </div>
             <div  className={`${activestate==2?"block":"hidden"} mt-10 flex justify-between `}>
                <ul className='space-y-2'>
                    <h2 className='text-2xl font-semibold text-red-400 dark:text-customBlue'>Live Link</h2>
                    <li  className='dark:hover:text-customBlue hover:text-red-400 cursor-pointer'><Link href={maindata?.frontendLiveLink}>Fontend</Link></li>
                    {
                        maindata?.status === "fullStack" ?<li  className='dark:hover:text-customBlue hover:text-red-400  cursor-pointer'><Link href={maindata?.backendLiveLink!}>Backend</Link></li> : ""
                    }
                    
                </ul>
                <ul className='space-y-2 text-right'>
                   <h2 className='text-2xl font-semibold text-red-400 dark:text-customBlue'>Source Code</h2>
                   <li className='dark:hover:text-customBlue hover:text-red-400  cursor-pointer'><Link href={maindata?.frontendSourceLink
}>Fontend</Link></li>
                   {
                        maindata?.status === "fullStack" ?<li className='dark:hover:text-customBlue hover:text-red-400  cursor-pointer' ><Link href={maindata?.backendSourceLink!                        }>Backend</Link></li> : ""
                    }
                   
                </ul>
             </div>
             <div  className={`${activestate==3?"block":"hidden"} my-10`}>
                 <ShowSinglevioes imgUrl={maindata?.imgurl} videoUrl={maindata?.videourl} />
             <div>
               
             </div>
             </div>
            </div>
             
             
            {/* righ par  */}
             
            </div>
            <div className="col-span-1 xl:block hidden ">
                       
            <ul className="space-y-8">
         {
          sidebardata.map((item,index) => <li  key={index}>< Card title={item.title} dis={item.description} src={item.imgurl} id={item._id}  /></li> )
         }
         </ul>
                

            
            
            </div>
        </div>
    ); 
}

export default SingelCourse;
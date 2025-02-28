"use client"
import Image from 'next/image';
import { useState } from 'react';
import {  FaCircle } from 'react-icons/fa';
import ShowSinglevioes from './ShowSinglevioes';
import Link from 'next/link';
import Card from './Card';

const SingelCourse =() => {
     const [activestate,setActivestate] = useState<number>(0)

     const what_will_learn = [
        {title:"Visual Learning with theory",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took."},
        {title:"Learn basic logical programms",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting."},
        {title:"Error Solution and implenentation",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tex an unknown printer took dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting."},
    ]

      

    const data = [
        { id: 1, title: "sakib1", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget1" },
        { id: 2, title: "sakib2", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget2" },
        { id: 3, title: "sakib3", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget3" },
        { id: 4, title: "sakib4", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget4" },
        { id: 5, title: "sakib5", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget5" }
      ];
      
    return (
        <div className="xl:grid xl:grid-cols-4  gap-5 w-11/12 max-w-[1280px]  mx-auto">
            <div className="col-span-3 ">
             <Image height={1000} width={1000} src="https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" alt="demo" className="w-full object-cover " />
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
               <h4 className='text-2xl font-bold py-5'>PorjectName</h4>
               <p className='pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy tn an unknodard dummy text ever since the 1500s, when an unknowwn printer took a galley of type and scrambled it to make a type shas been the industry’s standard dummy text ever since the 1500s, look like readable English when an un loream ipsum.</p>
                <ul>
                     {
                        what_will_learn.map((item,id) =>  <li key={id}>
                        <span className='flex gap-2 items-center text-lg font-bold py-2'><FaCircle  className='dark:text-customBlue text-red-400'/>{item.title}</span>
                        <p className='ml-5'>{item.description}</p>
                    </li>)
                     }
                </ul>
                <h4 className='font-bold text-2xl py-5 '>Description</h4>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.
                </p>
             </div>
             <div  className={`${activestate==1?"block":"hidden"} mb-5 space-y-10`}>
             <div className='mt-10'>
            <h2 className="text-lg font-semibold text-red-400 dark:text-customBlue">Technologies Used</h2>
            <ul className="list-disc pl-10 cursor-pointer">
                <li>Home Page: A visually appealing landing page introducing the brand.</li>
            </ul>
            </div>

            <div className="mt-4">
            <h2 className="text-lg font-semibold text-red-400 dark:text-customBlue">Features</h2>
            <ul className="list-disc pl-10  cursor-pointer">
                <li>Home Page: A visually appealing landing page introducing the brand.</li>
            </ul>
            </div>
             </div>
             <div  className={`${activestate==2?"block":"hidden"} mt-10 flex justify-between `}>
                <ul className='space-y-2'>
                    <h2 className='text-2xl font-semibold text-red-400 dark:text-customBlue'>Live Link</h2>
                    <li  className='dark:hover:text-customBlue hover:text-red-400 cursor-pointer'><Link href="/">Fontend</Link></li>
                    <li  className='dark:hover:text-customBlue hover:text-red-400  cursor-pointer'><Link href="/">Backend</Link></li>
                </ul>
                <ul className='space-y-2 text-right'>
                   <h2 className='text-2xl font-semibold text-red-400 dark:text-customBlue'>Source Code</h2>
                   <li className='dark:hover:text-customBlue hover:text-red-400  cursor-pointer'><Link href="/">Fontend</Link></li>
                   <li className='dark:hover:text-customBlue hover:text-red-400  cursor-pointer' ><Link href="/">Backend</Link></li>
                </ul>
             </div>
             <div  className={`${activestate==3?"block":"hidden"} my-10`}>
                 <ShowSinglevioes/>
             <div>
               
             </div>
             </div>
            </div>
             
             
            {/* righ par  */}
             
            </div>
            <div className="col-span-1 xl:block hidden ">
                       
            <ul className="space-y-8">
         {
          data.map((item,index) => <li  key={index}>< Card title={item.title} dis={item.dis} src={item.src} id={item.id}  /></li> )
         }
         </ul>
                

            
            
            </div>
        </div>
    ); 
}

export default SingelCourse;
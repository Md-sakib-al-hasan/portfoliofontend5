
import React from 'react'
import Card from './Card'
const data = [
  { id: 1, title: "sakib1", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget1" },
  { id: 2, title: "sakib2", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget2" },
  { id: 3, title: "sakib3", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget3" },
  { id: 4, title: "sakib4", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget4" },
  { id: 5, title: "sakib5", src: "https://i.ibb.co.com/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png", dis: "neverforget5" }
];

const Cards = () => {
  return (
    <div className='container mx-auto  xl:px-0  px-8 py-14 '>
        <ul className="grid lg:grid-cols-4 md:grid-cols-3  gap-5">
         {
          data.map((item,index) => <li  key={index}>< Card title={item.title} dis={item.dis} src={item.src} id={item.id}  /></li> )
         }
         </ul>
    </div>
  )
}

export default Cards

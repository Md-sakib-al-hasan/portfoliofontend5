import Image from "next/image"
import react from "../assets/homepage/icons8-react-native-48.png"
import figma from "../assets/homepage/figma.png"
import html from "../assets/homepage/icons8-html-48.png"
import css from "../assets/homepage/icons8-css-48.png"
import tailwind from "../assets/homepage/tailwind-css.256x154 (1).png"
import javaScripts from "../assets/homepage/icons8-js-48.png"
import typeScripts from "../assets/homepage/icons8-typescript-48 (1).png"
import Next from "../assets/homepage/icons8-next.js-48.png"
import redux from "../assets/homepage/icons8-redux-48.png"
import express from "../assets/homepage/icons8-express-js-64.png"
import mongoDB from "../assets/homepage/icons8-mongo-db-48.png"
import firebase from "../assets/homepage/icons8-firebase-48.png"
import axios from "../assets/homepage/axios-seeklogo.png"
import mongoose from "../assets/homepage/icons8-mongoose-48.png"


const learningTopics = [
    { name: "Figma", category: "Design", type: "UI/UX Design", image: figma },
    { name: "HTML", category: "Frontend", type: "Markup Language", image: html },
    { name: "CSS", category: "Frontend", type: "Styling", image: css },
    { name: "Tailwind CSS", category: "Frontend", type: "Utility-First CSS Framework", image: tailwind },
    { name: "JavaScript", category: "Frontend", type: "Programming Language", image: javaScripts },
    { name: "TypeScript", category: "Frontend", type: "Typed Superset of JavaScript", image: typeScripts },
    { name: "React", category: "Frontend", type: "JavaScript Library", image: react },
    { name: "Next.js", category: "Frontend", type: "React Framework", image: Next },
    { name: "Redux Toolkit", category: "Frontend", type: "State Management", image: redux },
    { name: "Express.js", category: "Backend", type: "Web Framework", image: express },
    { name: "MongoDB", category: "Database", type: "NoSQL Database", image: mongoDB },
    { name: "Mongoose", category: "Backend", type: "MongoDB ODM", image: mongoose },
    { name: "Firebase", category: "Backend", type: "Backend as a Service", image: firebase },
    { name: "Axios", category: "Frontend/Backend", type: "HTTP Client", image: axios },
    { name: "Axios", category: "Frontend/Backend", type: "HTTP Client", image: axios },
];


  
  


const EssentialTools = () => {
  return (
    <div className="text-center space-y-5 xl:px-0 px-8 ">
      <h2 className="md:text-4xl font-semibold text-2xl">Essential Tools I Use</h2>
      <p>Discover the  powerful tools and technologies i use to create exceptional ,high performing websites & applications </p>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3   gap-5">
        {
            learningTopics.map((item,index) => 
            {
                return <div key={index} className="border-2  rounded-md border-white/20">
                <ul className="flex items-center gap-2 p-2 ">
                     <li className="bg-white/20 py-2 px-1 rounded-lg"><Image className="w-7" src={item.image} alt="react"/></li>
                     <li className="text-left">
                       <span className="block text-lg">{item.name}</span>
                       <span className="block text-[12px]">{item.type}</span> 
                     </li>
                 </ul>
                </div>
            }  )
        }
       
      </div>
    </div>
  )
}

export default EssentialTools

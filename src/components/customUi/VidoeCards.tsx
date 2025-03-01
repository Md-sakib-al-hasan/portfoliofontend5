import React from 'react'
import VideoCard from './VidoeCard';

const videosArray = [
  {
    "id": "bWhBMNG",
    "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png",
    "title": "Introduction to Next.js",
    "description": "A quick overview of how to set up and create a Next.js application."
  },
  {
    "id": "xYz123A",
    "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png",
    "title": "Next.js Routing Explained",
    "description": "Learn about file-based routing in Next.js and how to navigate between pages."
  },
  {
    "id": "pQr456B",
    "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png",
    "title": "Fetching Data in Next.js",
    "description": "Explore different ways to fetch data in Next.js, including getStaticProps and getServerSideProps."
  },
  {
    "id": "LmN789C",
    "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png",
    "title": "Deploying Next.js Apps",
    "description": "Step-by-step guide on how to deploy your Next.js app to Vercel and other platforms."
  },
  {
    "id": "UvW987D",
    "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png",
    "title": "Optimizing Performance in Next.js",
    "description": "Learn best practices for optimizing the performance of your Next.js application."
  }
];

  
const VidoeCards = () => {
  return (
    <ul className="grid grid-cols-4 container mx-auto gap-5 py-20">
    {
        videosArray.map(item =>  <li key={item.id}><VideoCard src="https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" title={item.title} description={item.description} id="1"/></li> )
    }
  </ul> 
  )
}

export default VidoeCards

import React from 'react'
import VideoCard from './VidoeCard';

const videosArray = [
    {
      "id": "bWhBMNG",
      "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png"
    },
    {
      "id": "xYz123A",
      "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png"
    },
    {
      "id": "pQr456B",
      "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png"
    },
    {
      "id": "LmN789C",
      "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png"
    },
    {
      "id": "UvW987D",
      "url": "https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png"
    }
  ];
  
const VidoeCards = () => {
  return (
    <ul className="grid grid-cols-4 container mx-auto gap-5 py-20">
    {
        videosArray.map(item =>  <li key={item.id}><VideoCard src="https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" id="1"/></li> )
    }
  </ul> 
  )
}

export default VidoeCards

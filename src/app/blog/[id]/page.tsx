

import ShowSinglevioes from '@/components/customUi/ShowSinglevioes';
import VideoCard from '@/components/customUi/VidoeCard';


const Singelvidoes =() => {
  
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
      


    return (
        <div className="xl:grid xl:grid-cols-4  gap-5 w-11/12 max-w-[1280px]  mx-auto">
            <div className="col-span-3 ">
            <ShowSinglevioes/>
             {/* overviewProjects */}
            <div>
      
             <div className={` mb-5`}>
               <h4 className='text-2xl font-bold py-5'>PorjectName</h4>
               
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an un it to make a type specimen book. It has survived not only fivnged.
                </p>
             </div>


            </div>
             
             
            {/* righ par  */}
             
            </div>
            <div className="col-span-1 xl:block hidden ">
                       
            <ul className="space-y-8">
            {
        videosArray.map(item =>  <li key={item.id}><VideoCard src="https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" id={item.id}/></li> )
    }
         </ul>
                

            
            
            </div>
        </div>
    ); 
}

export default Singelvidoes;
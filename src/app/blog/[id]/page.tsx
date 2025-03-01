

import CommentSection from '@/components/customUi/ComentSection';
import CommentsList from '@/components/customUi/commentlist';
import ShowSinglevioes from '@/components/customUi/ShowSinglevioes';
import VideoCard from '@/components/customUi/VidoeCard';


const Singelvidoes =() => {
  
   
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
             <CommentSection/>
             <CommentsList/>
             
            </div>
            <div className="col-span-1 xl:block hidden ">
                       
            <ul className="space-y-8">
            {
        videosArray.map(item =>  <li key={item.id}><VideoCard src="https://i.ibb.co/bWhBMNG/Create-Next-App-Google-Chrome-24-10-2024-15-17-50.png" title={item.title} description={item.description} id={item.id}/></li> )
    }
         </ul>
                

            
            
            </div>
        </div>
    ); 
}

export default Singelvidoes;
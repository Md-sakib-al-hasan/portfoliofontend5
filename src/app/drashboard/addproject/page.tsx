"use client"
import { useState } from "react";
import Link from "next/link";
import Choicefile, { Tchoicefile } from "@/components/customUi/from/choicefile";
import Specialfetured from "@/components/customUi/from/specialfetured";
import ProjectLink from "@/components/customUi/from/projectLink";
import Descrioform from "@/components/customUi/from/Descrioform";

type Tdescriptions = {
  title:string,
  description:string,
  details:string,
  status:string,
}

type TProjectLink = {
  fontendlink:string,
  backendlink:string,
  fontendsourcelink:string,
  backendsourcelink:string,
}
type TSecialFetural = {
  features:[],
}




export default function AddProduct() {
 
  const [file, setfile] = useState<Tchoicefile | null>(null);
  const [speial, setSpecial] = useState< TSecialFetural | null>(null);
  const [technology, setTechnology] = useState< TSecialFetural | null>(null);
  const [fetured, setFetured] = useState< TSecialFetural | null>(null);
  const [description, setDescription] = useState< Tdescriptions | null>(null);
  const [linkpro, setLink] = useState< TProjectLink | null>(null);
  const [projectstatus,setprojectstaus] = useState(false);
  const [pagecontroller,setpgecontrollers] = useState<number>(1);

  const handlepgagecontroller = (pgenumber:number) => {
                     setpgecontrollers(pgenumber)
                     
  }


 const handledatabasesave = () => {

    const newprojects = {
      title:description?.title,
      description:description?.description,
      details:description?.details,
      status:description?.status,
      imgurl:file?.imgurl,
      videourl:file?.videourl,
      frontendLiveLink:linkpro?.fontendlink,
      frontendSourceLink:linkpro?.fontendsourcelink,
      backendLiveLink:linkpro?.backendlink,
      bakcendSroueLink:linkpro?.backendsourcelink,
      specialFeatured:speial?.features,
      Technologies:technology?.features,
      featured:fetured?.features

    }
    console.log(newprojects)     
 }


     
  
  
  
  return (
    <div >
          <Choicefile setpgecontroller={() => handlepgagecontroller(2)} setdata={ setfile} />
          <Specialfetured setpgecontroller={() => handlepgagecontroller(3)}  title="Specialfetured" setSpecial={setSpecial}  />
           <Specialfetured setpgecontroller={() => handlepgagecontroller(4)} title="Technologies Used" setSpecial={setTechnology}  />
          <Specialfetured setpgecontroller={() => handlepgagecontroller(5)} title="Fetured" setSpecial={setFetured }  />
          <Descrioform setpgecontroller={() => handlepgagecontroller(6)} setprojectstatus={setprojectstaus} setdata={setDescription}/>
           <ProjectLink setpgecontroller={() => handlepgagecontroller(7)} projectstatus={projectstatus} setdata={setLink}/>
        
        
         
        
         <div>
         <ul  className="bg-[#f8faff] mx-auto p-4 shadow-lg text-center">
      
          <li className={`${file === null?"text-red-400":"text-black" }`}>image and vidoes successfully add</li>
          <li className={`${speial === null?"text-red-400":"text-black" }`}>SpecialFeturd  successfully add</li>
          <li className={`${technology === null?"text-red-400":"text-black"}`}>Technologies   successfully add</li>
          <li className={`${fetured === null?"text-red-400":"text-black" }`}>Fetured successfully add</li>
          <li className={`${description === null?"text-red-400":"text-black" }`}> Description  successfully add</li>
          <li className={`${linkpro === null?"text-red-400":"text-black" }`}>Link successfully add</li>

          <div className=" mt-5 flex justify-between">
            <button onClick={handledatabasesave} className="py-2 px-3 bg-red-400 rounded-md">To save project Clicke here</button>
            <button className="py-2 px-3 bg-red-400 rounded-md"><Link href={"/drashboard"}>dont the save project Clicke here</Link></button>
          </div>
        </ul>
         </div>
           
    </div>
  );
}

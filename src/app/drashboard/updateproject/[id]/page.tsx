"use client"
import { useState } from "react";
import Link from "next/link";
import Choicefile, { Tchoicefile } from "@/components/customUi/from/choicefile";
import Specialfetured from "@/components/customUi/from/specialfetured";
import ProjectLink from "@/components/customUi/from/projectLink";
import Descrioform from "@/components/customUi/from/Descrioform";
import { useParams } from "next/navigation";
import update from "@/actions/update";
import toast, { Toaster } from "react-hot-toast";
import { Tdescriptions, TProjectLink, TSecialFetural } from "../../addproject/page";
import { MdOutlineOpenInFull } from "react-icons/md";




export default function UpdateProduct() {
 
  const [file, setfile] = useState<Tchoicefile | null>(null);
  const [speial, setSpecial] = useState< TSecialFetural | null>(null);
  const [technology, setTechnology] = useState< TSecialFetural | null>(null);
  const [fetured, setFetured] = useState< TSecialFetural | null>(null);
  const [description, setDescription] = useState< Tdescriptions | null>(null);
  const [linkpro, setLink] = useState< TProjectLink | null>(null);
  const [projectstatus,setprojectstaus] = useState(false);
  const params = useParams();
  const projectId = params.id;
  


  
 const handledatabasesave = async () => {

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

    const cleanedNewProjects = Object.fromEntries(
      Object.entries(newprojects).filter(([_, v]) =>  v !== undefined && v !== null && v !== "") // eslint-disable-line @typescript-eslint/no-unused-vars
    );

    try {
       console.log(cleanedNewProjects)
      const result = await update(cleanedNewProjects, "/projects/update-project",projectId as string); 

      if (result.error) {
        toast.error("Error: " + result.error); 
      } else {
        toast.success("Project saved successfully!");
      }
    } catch (error) {
      toast.error("Error during API request: " + (error as Error).message);
    }     
 }


     
  
  
  
  return (
    <div >
          <Toaster/>
          <Choicefile setdata={ setfile} />
          <Specialfetured   title="Specialfetured" setSpecial={setSpecial}  />
           <Specialfetured  title="Technologies Used" setSpecial={setTechnology}  />
          <Specialfetured  title="Fetured" setSpecial={setFetured }  />
          <Descrioform  setprojectstatus={setprojectstaus} setdata={setDescription}/>
          <div onClick={() => setprojectstaus(prev => !prev) } className=" cursor-pointer flex items-center gap-4">
          <p className="py-4">{projectstatus?"To hidden backendLink form clicked  here":"To see backendLink form clicked  here"} </p><MdOutlineOpenInFull size={22} className="inline" />
          </div>
           <ProjectLink  projectstatus={projectstatus} setdata={setLink}/>
        
        
         
        
         <div>
         <ul  className="bg-[#f8faff] mx-auto p-4 shadow-lg text-center">
      
          <li className={`${file === null?"text-black":"text-green-400" }`}>image and vidoes successfully update</li>
          <li className={`${speial === null?"text-black":"text-green-400" }`}>SpecialFeturd  successfully update</li>
          <li className={`${technology === null?"text-black":"text-green-400"}`}>Technologies   successfully update</li>
          <li className={`${fetured === null?"text-black":"text-green-400" }`}>Fetured successfully update</li>
          <li className={`${description === null?"text-black":"text-green-400" }`}> Description  successfully update</li>
          <li className={`${linkpro === null?"text-black":"text-green-400" }`}>Link successfully update</li>

          <div className=" mt-5 md:flex justify-between space-y-4 text-white">
            <button onClick={handledatabasesave} className="py-2 px-3 bg-red-400 rounded-md">To permanetly update your project clicked here</button>
            <button className="py-2 px-3 bg-red-400 rounded-md"><Link href={"/drashboard"}>if you dont went to update cliked here</Link></button>
          </div>
        </ul>
         </div>
           
    </div>
  );
}

import allget from "@/actions/allget";
import SingelCourse from "@/components/customUi/SingleProject"
import { TProject } from "@/types";
import { Metadata } from "next";
type Props = {
  
  params: Promise<{ id: string }>

};

export async function generateStaticParams() {
  const result = await allget("/projects/get-all-project",undefined,60)
  const allproject= result.data.result;
  return allproject.slice(0, 5).map((project:TProject) => ({
    id: project._id,
  }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {id:projectId} = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/projects/getsingle-project?id=${projectId}`)
  const data = await response.json()
   const project = data.data

  return {
    title: project.title,
    description: project.description,
  };
}


const Singlepage = async({ params }:Props) => {
  const result = await allget("/projects/get-all-project",{limit:5},60)
  const allproject= result.data.result;
  const {id:projectId} = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/projects/getsingle-project?id=${projectId}`)
  const data = await response.json()
  return (
    <div className="mt-8">
       <SingelCourse maindata={data.data}  sidebardata={allproject}/>
    </div>
  )
}

export default Singlepage

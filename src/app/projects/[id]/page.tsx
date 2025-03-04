import allget from "@/actions/allget";
import SingelCourse from "@/components/customUi/SingleProject"
import Image from "next/image";
import { Metadata } from "next";
type Props = {
  params: {
    id: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectId = params.id;
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/projects/getsingle-project?id=${projectId}`)
  const data = await response.json()
   const project = data.data

  return {
    title: project.title,
    description: project.description,
  };
}


const Singlepage = async({ params }:{params: {id: string;};}) => {
  const result = await allget("/projects/get-all-project",{limit:5},60)
  const allproject= result.data.result;
  const projectId = params.id;
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/projects/getsingle-project?id=${projectId}`)
  const data = await response.json()
  return (
    <div className="mt-8">
       <SingelCourse maindata={data.data}  sidebardata={allproject}/>
    </div>
  )
}

export default Singlepage

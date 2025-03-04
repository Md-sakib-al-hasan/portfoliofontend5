import { TProject } from "@/types";

export const getalldata = async (sort:string,searchValue:string | undefined,url:string,) => {
    
    try {
      const query = { sort:sort, searchTerm:(searchValue? searchValue:"") };
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}${url}?${new URLSearchParams(query).toString()}`);
      const data = await response.json();
      if (response.ok) {
        
        
        return {reulst:data.data.result,totoal:data.data.meta.total}
      } else {
        console.error('Failed to fetch data');
       
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } 
  };




  
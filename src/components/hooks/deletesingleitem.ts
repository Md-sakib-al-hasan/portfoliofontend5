export const deleteSingleitem = async (id: number | string,url:string) => {
   try {

     const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}${url}?id=${id}`, {
       method: "DELETE",
     });
 
     const result = await response.json();
     if (response.ok) {
        return result
       
     } else {
      
       throw new Error(result.message || "Failed to delete");
     }
     
 
   } catch (error) {
     
     return { error: (error as Error).message || "Something went wrong" };
   }
} 

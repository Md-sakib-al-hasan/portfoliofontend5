export const deleteSingleitem = async (id: number | string,url:string) => {
   try {
     console.log(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}${url}?id=${id}`)
     const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}${url}?id=${id}`, {
       method: "DELETE",
     });
 
     const result = await response.json();
     if (response.ok) {
        return result
       
     } else {
      
       throw new Error(result.message || "Failed to delete");
     }
     
 
   } catch (error: any) {
     console.log("Error during API request:", error.message);
     return { error: error.message || "Something went wrong" };
   }
} 

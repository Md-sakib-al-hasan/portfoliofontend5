"use server";

const deletesingleitem = async <T>(data: T, url: string,id:string) => {
  try {
    const response = await fetch(`${process.env.DOMAIN_SERVER}${url}?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to delete");
    }
    

  } catch (error: any) {
    console.error("Error during API request:", error.message);
    return { error: error.message || "Something went wrong" };
  }
};

export default deletesingleitem;

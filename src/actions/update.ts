"use server";

const update = async <T>(data: T, url: string,id:string) => {
  try {
    const response = await fetch(`${process.env.DOMAIN_SERVER}${url}?id=${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result)
    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to update");
    }
    

  } catch (error: any) {
    console.error("Error during API request:", error.message);
    return { error: error.message || "Something went wrong" };
  }
};

export default update;

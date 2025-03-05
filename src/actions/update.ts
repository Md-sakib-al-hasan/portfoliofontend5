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
    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to update");
    }
    

  } catch (error) {
    return { error: (error as Error).message || "Something went wrong" };
  }
};

export default update;

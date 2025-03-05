"use server";

const create = async <T>(data: T, url: string) => {
  try {
    const response = await fetch(`${process.env.DOMAIN_SERVER}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to create");
    }
    

  } catch (error) {
    
    return { error: (error as Error).message || "Something went wrong" };
  }
};

export default create;

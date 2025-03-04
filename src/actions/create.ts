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
    console.log(result)
    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to create");
    }
    

  } catch (error: any) {
    console.error("Error during API request:", error.message);
    return { error: error.message || "Something went wrong" };
  }
};

export default create;

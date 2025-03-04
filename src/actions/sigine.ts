"use server";

const SigineForm = async (data: FormData) => {
  const blogdata = Object.fromEntries(data.entries());

  try {
    const response = await fetch(`${process.env.DOMAIN_SERVER}/users/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogdata),
    });

    const result = await response.json();

    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to create user");
    }
  } catch (error: any) {
    console.error("Error during API request:", error.message);
    return { error: error.message || "Something went wrong" };
  }
};

export default SigineForm;

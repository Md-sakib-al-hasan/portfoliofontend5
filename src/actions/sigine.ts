"use server";

const SigineForm = async (data: FormData | {name:string,email:string,password:string}) => {
  let senddata ;
  if (data && data instanceof FormData) {
     senddata = Object.fromEntries(data.entries());

  }else{
    senddata=data
  }


  try {
    const response = await fetch(`${process.env.DOMAIN_SERVER}/users/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(senddata),
    });

    const result = await response.json();

    if (response.ok) {
      return result; 
    } else {
      throw new Error(result.message || "Failed to create user");
    }
  } catch (error) {
    return { error: (error as Error).message || "Something went wrong" };
  }
};

export default SigineForm;

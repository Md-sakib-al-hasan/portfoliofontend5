"use server";

const LoginForm = async (data: FormData) => {
  const blogdata = Object.fromEntries(data.entries());

  try {
    const response = await fetch(`${process.env.DOMAIN_SERVER}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogdata),
    });

    const result = await response.json();

    if (response.ok) {
      console.log(result, "login sakib");
      return result; 
    } else {
      return { error: result.message || "Invalid credentials" };
    }
  } catch (error: any) {
    console.error("Error during login request:", error.message);
    return { error: "Something went wrong" };
  }
};

export default LoginForm;

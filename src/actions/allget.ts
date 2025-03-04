"use server"; // Makes this function run on the server

interface QueryParams extends Record<string, any> {}

interface FetchOptions extends RequestInit {
  next?: { revalidate: number };
}

const allget = async <T extends QueryParams>(
  url: string,
  query?: T,
  refactime?: number
) => {
  try {
    // Conditionally create query string only if `query` is provided
    const queryString = query
      ? new URLSearchParams(Object.entries(query)).toString()
      : "";

    console.log(queryString);
    console.log(`${process.env.DOMAIN_SERVER}${url}${queryString ? `?${queryString}` : ""}`);

    const options: FetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (typeof refactime === "number") {
      options.next = { revalidate: refactime };
    }

    const response = await fetch(
      `${process.env.DOMAIN_SERVER}${url}${queryString ? `?${queryString}` : ""}`,
      options
    );

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || "Failed to fetch data");
    }
  } catch (error: any) {
    console.error("Error during API request:", error.message);
    return { error: error.message || "Something went wrong" };
  }
};

export default allget;

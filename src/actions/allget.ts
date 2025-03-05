"use server"; 

type QueryParams = Record<string, string | number | boolean | undefined>;

interface FetchOptions extends RequestInit {
  next?: { revalidate: number };
}

const allget = async <T extends QueryParams>(
  url: string,
  query?: T,
  refactime?: number
) => {
  try {
    
    const queryString = query
      ? new URLSearchParams(
          Object.entries(query).map(([key, value]) => [key, String(value)])
        ).toString()
      : "";



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
  } catch (error) {
    
    return { error: (error as Error).message || "Something went wrong" };
  }
};

export default allget;

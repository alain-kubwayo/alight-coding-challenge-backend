export const searchService = async (searchQuery: string) => {
  try {
    const response = await fetch(
      `https://serpapi.com/search?q=${searchQuery}&api_key=${process.env.SERP_API_KEY}`
    );
    return response.json();
  } catch (error) {
    Promise.reject(error);
  }
};

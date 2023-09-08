import { Article } from "../domain/models";

const API_KEY = "2be211bf25f9450daa2fa40b5f6d11ff";
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us";

export const fetchNewsAPI = async (): Promise<Article[]> => {
  try {
    const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

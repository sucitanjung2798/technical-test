import { Article } from "../domain/models";
import { NewsRepository } from "../domain/repositories";

export const fetchNews = async (
  repository: NewsRepository
): Promise<Article[]> => {
  return repository.fetchNews();
};

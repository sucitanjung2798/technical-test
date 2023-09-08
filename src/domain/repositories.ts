import { Article } from "./models";

export interface NewsRepository {
  fetchNews(): Promise<Article[]>;
}

export interface NewsDetail {
  fetchDetail(): Promise<Article>;
}

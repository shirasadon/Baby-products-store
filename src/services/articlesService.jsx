import httpService from "./httpService";

export const createArticle = (article) => {
  return httpService.post("/articles", article);
};

export function getArticles() {
  return httpService.get("/articles");
}

const articlesService = { createArticle, getArticles };
export default articlesService;

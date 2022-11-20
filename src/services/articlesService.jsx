import httpService from "./httpService";

export const createArticle = (article) => {
  return httpService.post("/articles", article);
};

export function getArticles() {
  return httpService.get("/articles");
}
export function getArticle(article, _id) {
  const articlrId = article._id;
  return httpService.get(`/articles/${articlrId}`);
}

const articlesService = { createArticle, getArticles, getArticle };
export default articlesService;

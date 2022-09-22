import Article from "./article";
import { useState } from "react";
import { useEffect } from "react";
import articlesService from "../services/articlesService";
function Articles() {
  const [articles, setArticles] = useState([]);
  async function  getAllArticles() {
    const { data } = await articlesService.getArticles();
    setArticles(data);
  }
  useEffect(() => {
    getAllArticles();
  }, []);
  return (
    <>
      <div className="row">
        {!articles.length ? (
          <p>No Articles</p>
        ) : (
          articles.map((article) => {
            <Article key={article._id} article={article}/>;
            console.log(article);
          })
        )}
      </div>
    </>
  );
}

export default Articles;

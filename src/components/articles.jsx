import { useState } from "react";
import { useEffect } from "react";
import articlesService from "../services/articlesService";
import Article from "./article";
function Articles() {
  const [articles, setArticles] = useState([]);
  async function getAllArticles() {
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
          <p style={{textAlign:"center", color:"#e6004c",fontSize:"50px"}}>No Articles</p>
        ) : (
          articles.map((article) => (
            <Article key={article._id} article={article} />
          ))
        )}
      </div>
    </>
  );
}

export default Articles;

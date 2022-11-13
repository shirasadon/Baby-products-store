// import Article from "./article";
import { useState } from "react";
import { useEffect } from "react";
import articlesService from "../services/articlesService";
function ReadMoreArticle({article}) {
    const [articleId, setArticleId] = useState([]);
    async function getArticleById() {
      const { data } = await articlesService.getArticle();
      setArticleId(data);
    }
    useEffect(() => {
        getArticleById();
    }, []);
    return ( 
        <>
       <div className="row">
       {!articleId.length ? (
          <p style={{textAlign:"center", color:"#e6004c",fontSize:"50px"}}>No Article</p>
        ) :(
       articleId.map((article)=>{
        <div class="min-h-screen w-full bg-gray-300">
        <div class="max-w-screen-md mx-auto px-10 pt-20">
          <div class="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
            <div class="w-full md:w-1/2 p-4">
              <img src={article.img} alt={article.title} class="w-8"/>
              <h3 class="text-3xl font-bold">{article.title}</h3>
              <p>{article.text}</p>
            </div>
            <div class="w-full md:w-1/2 p-4 md:p-0">
              <img src={article.img} alt="" class="w-64 mx-auto"/>
            </div>
          </div>
        </div>
      </div>
       })
        )}
</div>
      
        {/* <div class="min-h-screen w-full bg-gray-300">
  <div class="max-w-screen-md mx-auto px-10 pt-20">
    <div class="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
      <div class="w-full md:w-1/2 p-4">
        <img src={img} alt={title} class="w-8"/>
        <h3 class="text-3xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>
      <div class="w-full md:w-1/2 p-4 md:p-0">
        <img src={img} alt="" class="w-64 mx-auto"/>
      </div>
    </div>
  </div>
</div>
         */}
       
        </>
     );
}

export default ReadMoreArticle;
import "../style/article.css"
import { Link } from "react-router-dom";

function Article({ article }) {
  const { _id,img, title, text } = article;
  return (
    <>

<div className="a-box" class="a-box">
  <div className="img-container" class="img-container">
    <div className="img-inner" class="img-inner">
      <div className="inner-skew" class="inner-skew">
        <img src={img}/>
      </div>
    </div>
  </div>
  <div className="text-container" class="text-container">
    <h3>{title}</h3>
    <div>
     {text}
  </div>
 
</div>
</div>
    </>
  );
}

export default Article;

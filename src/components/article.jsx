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
  <Link to={{pathname:`/readMore/${_id}`,data:[{articleid:article._id,articleImg:article.img,articleTitle:article.title,aricleText:article.text}]}}>read more</Link>
</div>
</div>
    </>
  );
}

export default Article;

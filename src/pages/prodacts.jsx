import { Link } from "react-router-dom";
import "../style/productsComponent.css"
function Products() {
  return (
    <>

<div class="row1-container">
    <div class="box box-down cyan">
      <h2>
      <Link style={{fontSize:"32px",fontFamily:"cursive"}} to="/products/chairsafty" class="nav-item nav-link active">
      Safety Chair{" "}
            </Link>
            </h2>
      <img src="https://cdn-icons-png.flaticon.com/128/3320/3320202.png" alt="chairsafty"/>
    </div>

    <div class="box red">
      <h2> <Link style={{fontSize:"32px",fontFamily:"cursive"}} to="/products/babycarriges" class="nav-item nav-link active">
              Baby Carriges{" "}
            </Link></h2>
     
      <img style={{width:"80px",hight:"80px"}} src="https://cdn-icons-png.flaticon.com/128/709/709341.png" alt="babycarriges"/>
    </div>

    <div class="box box-down blue">
      <h2>  <Link style={{fontSize:"32px",fontFamily:"cursive"}}
              to="/products/clothingandfootweare"
              class="nav-item nav-link active"
            >
              Clothing and Footweare{" "}
            </Link></h2>
      <img style={{width:"80px",hight:"80px"}} src="https://cdn-icons-png.flaticon.com/128/4464/4464112.png" alt="clothingandfootweare"/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2> <Link style={{fontSize:"32px",fontFamily:"cursive"}} to="/products/furniture" class="nav-item nav-link active">
              Baby Furniture{" "}
            </Link></h2>
    
      <img src="https://cdn-icons-png.flaticon.com/128/2642/2642455.png" alt="furniture"/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box red">
      <h2>   <Link style={{fontSize:"32px",fontFamily:"cursive"}} to="/products/toys" class="nav-item nav-link active">
              Toys
            </Link></h2>
    
      <img src="https://cdn-icons-png.flaticon.com/128/3152/3152869.png" alt="toys"/>
    </div>
  </div>
    </>
  );
}

export default Products;

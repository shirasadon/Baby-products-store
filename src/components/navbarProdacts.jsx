import { Link } from "react-router-dom";
import   "../style/navbarproduct.css"
function NavbarProduct() {
  return (
    <>
<div>
      <div class="row"  >
        <div className="stylediv" class=" stylediv col-sm">
            <Link style={{fontSize:"20px",fontFamily:"cursive"}} to="/products/babycarriges" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#f08080",
               
                }}
                src="https://cdn-icons-png.flaticon.com/512/1014/1014615.png"
              ></img>{" "}
              baby carriges
            </Link>
            </div>
        
          <div className="stylediv" class=" stylediv col-sm">
            <Link style={{fontSize:"20px",fontFamily:"cursive"}} to="/products/clothingandfootweare" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#f08080",
                }}
                src="https://cdn-icons-png.flaticon.com/512/4464/4464080.png"
              ></img>
              Clothing and apparel
            </Link>
            </div>
      
         <div className="stylediv" class=" stylediv col-sm" >
            <Link style={{fontSize:"20px",fontFamily:"cursive"}} to="/products/furniture" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#f08080",
                }}
                src="https://cdn-icons-png.flaticon.com/512/6992/6992633.png"
              ></img>
              furniture
            </Link>
            </div>
        <div className="stylediv" class=" stylediv col-sm">
            <Link style={{fontSize:"20px",fontFamily:"cursive"}} to="/products/chairsafty" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#f08080",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3262/3262527.png"
              ></img>
              Safety Chair
            </Link>
            </div>
        <div className="stylediv" class=" stylediv col-sm">
            <Link style={{fontSize:"20px",fontFamily:"cursive"}} to="/products/toys" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#f08080",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3262/3262527.png"
              ></img>
              toys
            </Link>
            </div>
        </div>
        </div>
    </>
  );
}

export default NavbarProduct;

import { Link } from "react-router-dom";
import style from "../style/navbarproduct.css"
function NavbarProduct() {
  return (
    <>

      <div className={style.container} class="container" id="navbarSupportedContent" >
        <div  className="babycarriges">
            <Link to="/products/babycarriges" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#ffe4e1",
               
                }}
                src="https://cdn-icons-png.flaticon.com/512/1014/1014615.png"
              ></img>{" "}
              baby carriges
            </Link>
            </div>
        
          <div className="clothingandfootweare">
            <Link to="/products/clothingandfootweare" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#ffe4e1",
                }}
                src="https://cdn-icons-png.flaticon.com/512/4464/4464080.png"
              ></img>
              Clothing and apparel
            </Link>
            </div>
      
         <div className="furniture" >
            <Link to="/products/furniture" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#ffe4e1",
                }}
                src="https://cdn-icons-png.flaticon.com/512/6992/6992633.png"
              ></img>
              furniture
            </Link>
            </div>
        <div className="chairsafty">
            <Link to="/products/chairsafty" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#ffe4e1",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3262/3262527.png"
              ></img>
              Safety Chair
            </Link>
            </div>
        <div className="toys">
            <Link to="/products/toys" class="navbar-brand">
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#ffe4e1",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3262/3262527.png"
              ></img>
              toys
            </Link>
            </div>
        </div>
    </>
  );
}

export default NavbarProduct;

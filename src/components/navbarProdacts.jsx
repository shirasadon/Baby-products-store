import { Link } from "react-router-dom";

function NavbarProduct() {
  return (
    <>
      <div class="container" style={{ backgroundColor: "#ffe4e1" }}>
        <div class="row">
          <div class="col-sm">
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
          <div class="col-sm">
            <Link to="/clothingandfootweare" class="navbar-brand">
              {" "}
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
          <div class="col-sm">
            <Link to="/furniture" class="navbar-brand">
              {" "}
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
          <div class="col-sm">
            <Link to="/caresafty" class="navbar-brand">
              {" "}
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "#ffe4e1",
                }}
                src="https://cdn-icons-png.flaticon.com/512/7760/7760352.png"
              ></img>
              Safety chair
            </Link>
          </div>
          <div class="col-sm">
            <Link to="/products/toys" class="navbar-brand">
              {" "}
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
      </div>
    </>
  );
}

export default NavbarProduct;

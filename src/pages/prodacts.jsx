import { Link } from "react-router-dom";

function Products() {
  const stylediv={
    backgroundColor: "#ffe4e1",
 height: "300px",
 width: "800px",
 textAlign:"center"
  }
  return (
  <>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div style={stylediv} class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to="/products/caresafty" class="nav-item nav-link active">Care Safety </Link>
      <Link to="/products/babycarriges" class="nav-item nav-link active">Baby Carriges </Link>
      <Link to="/products/clothingandfootweare" class="nav-item nav-link active">Clothing and Footweare </Link>
      <Link to="/products/furniture" class="nav-item nav-link active">Baby Furniture </Link>
      <Link to="/products/toys" class="nav-item nav-link active">Toys</Link>
    </div>
  </div>
</nav>
  </>
  )
}

export default Products;

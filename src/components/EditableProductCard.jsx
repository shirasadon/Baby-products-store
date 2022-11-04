
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import EditProduct from "./editProduct";
const styleCard = {
    width: "17rem",
    backgroundColor: "",
    margin: "15px",
    color: "#bf2b7a",
    fontFamily: "cursive",
    fontSize: ""
};

function EditableProductCard({product,}) {
    const {_id,title,description,img,category}=product
    return ( 
        <>
        <Card style={styleCard} >
        <Card.Img
          style={{ width: "180px", height: "180px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <br />
        </Card.Body>
        <Link  to={`/products/${_id}`} className="card-link">
       <i className = "bi bi-trash-fill">Delete product</i>
        </Link>
        <button
            type="button"
            className="btn btn-warning mx-2"
            data-bs-toggle="modal"
            data-bs-target="#editmodal"
          >
            Edit product <i className="bi bi-pencil-fill"></i>
          </button>
        <EditProduct product={product} EditProduct={EditProduct}></EditProduct>
</Card>
        
        
        </>
     );
}

export default EditableProductCard;
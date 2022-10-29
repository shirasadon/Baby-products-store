import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
const styleCard = {
    width: "17rem",
    backgroundColor: "",
    margin: "15px",
    color: "#bf2b7a",
    fontFamily: "cursive",
    fontSize: ""
};

function ProductCart({product}) {
    const { _id, title, category, description, img } = product;
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
</Card>
        </>
     );
}

export default ProductCart;
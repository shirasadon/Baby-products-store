import Card from "react-bootstrap/Card";
const styleCard = {
  width: "17rem",
  backgroundColor: "",
  margin: "15px",
  color: "#bf2b7a",
  fontFamily: "cursive",
  fontSize: "",
};
function Article( props ) {
  const {img, title, text}=props
  return (
    <>
  <Card style={styleCard} >
        <Card.Img
          variant="top"
          style={{ width: "180px", height: "180px" }}
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <br />
        </Card.Body>

</Card>
</>
    
  
  );
}

export default Article;

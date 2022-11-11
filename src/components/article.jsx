import Card from "react-bootstrap/Card";
const styleCard = {
  width: "17rem",
  backgroundColor: "",
  margin: "15px",
  color: "#bf2b7a",
  fontFamily: "cursive",
  fontSize: "",
};
function Article({ article }) {
  const { img, title, text } = article;
  return (
    <>
      <Card style={styleCard}>
        <Card.Img
          style={{ width: "180px", height: "180px" }}
          variant="top"
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

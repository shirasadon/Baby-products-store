import NavbarProduct from "../components/navbarProdacts";
import Slider from "../components/slider";
import Articles from "../components/articles";
function Home() {
  return (
    <>
      <Slider></Slider>
      <NavbarProduct></NavbarProduct>
      <h3
        style={{
          textAlign: "center",
          color: "#ff0066",
          fontSize: "50px",
          fontFamily: "cursive",
        }}
      >
        Articles
      </h3>
      <Articles></Articles>
    </>
  );
}

export default Home;

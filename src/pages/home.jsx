import NavbarProduct from "../components/navbarProdacts";
import Slider from "../components/slider";
import Articles from "../components/articles";
function Home() {
  return (
    <>
      <Slider></Slider>
      <NavbarProduct></NavbarProduct>
      <h3>Articles</h3>
      <Articles></Articles>
    </>
  );
}

export default Home;

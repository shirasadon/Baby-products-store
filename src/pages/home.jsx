import NavbarProduct from "../components/navbarProdacts";
import Slider from "../components/slider";
import Articles from "../components/articles";
function Home() {
  return (
    <>
      <Slider></Slider>
      <NavbarProduct></NavbarProduct>
      <hr style={{color:"#e6004c"}} />
      <h3 style={{textAlign:"center", color:"#e6004c",fontSize:"50px"}}>Articles</h3>
    
      <Articles></Articles>
    </>
  );
}

export default Home;

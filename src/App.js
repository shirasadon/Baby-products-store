import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarHeader from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/prodacts";
import Logout from "./pages/logout";
import Cart from "./pages/cart";
import Login from "./pages/login";
import SignupBiz from "./pages/signupbiz";
import Signup from "./pages/signup";
import AddProduct from "./pages/addproduct";
import AddArticle from "./pages/addarticle";
import HeaderPage from "./components/headerPage";
import Footer from "./components/footer";
import Articles from "./components/articles";
import Article from "./components/article";
import Toys from "./pages/toys";
import Babycarriges from "./pages/babyCarriges";
import Chairsafety from "./pages/careSafety";
import ClothingAndFootweare from "./pages/clothingAndFootweare";
import Furniture from "./pages/furniture";
function App() {
  return (
    <>
      <HeaderPage></HeaderPage>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout redirect="/" />} />
          <Route path="/login" element={<Login redirect="/" />} />
          <Route path="/signup" element={<Signup redirect="/login" />} />
          <Route path="/signupbiz" element={<SignupBiz redirect="/login" />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addarticle" element={<AddArticle />} />
          <Route path="/products/toys" element={<Toys />} />
          <Route path="/products/babycarriges" element={<Babycarriges />} />
          <Route path="/products/chairsafty" element={<Chairsafety />} />
          <Route path="/products/clothingandfootweare" element={<ClothingAndFootweare />} />
          <Route path="/products/furniture" element={<Furniture />} />


        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

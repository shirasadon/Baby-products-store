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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupbiz" element={<SignupBiz />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addarticle" element={<AddArticle />} />
      </Routes>
    </div>
  );
}

export default App;

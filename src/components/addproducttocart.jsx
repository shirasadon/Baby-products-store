import cartService from "../services/cartService";
import { useNavigate } from "react-router-dom";
import productService from "../services/productService";
function AddProductToCart({product}) {
  const navigate = useNavigate();
  // const {title,description,img,category}=product
    async function addProductToCart(product) {
      

        await productService.addproducttocart(product);
        navigate("/cart");
      }
  
      addProductToCart(product);
    return ( 
       null 
     );
}

export default AddProductToCart;
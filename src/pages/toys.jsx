import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";

function Toys() {
  const [products, setProducts] = useState([]);
  async function getProductToysCategory() {
    const { data } = await productService.getProductToys();
    setProducts(data);
  }
  useEffect(() => {
    getProductToysCategory();
  }, []);
  return (
    <>
      <div className="row">
        {!products.length ? (
          <p>No Products</p>
        ) : (
          products.map((product) => (
            <CardProduct key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
}

export default Toys;

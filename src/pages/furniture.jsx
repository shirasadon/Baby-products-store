import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";
function Furniture() {
  const [products, setProducts] = useState([]);
  async function getProductFurnitureCategory() {
    const { data } = await productService.getProductFurniture();
    setProducts(data);
  }
  useEffect(() => {
    getProductFurnitureCategory();
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

export default Furniture;

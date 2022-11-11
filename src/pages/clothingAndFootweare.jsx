import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";

function ClothingAndFootweare() {
  const [products, setProducts] = useState([]);
  async function getProductClothCategory() {
    const { data } = await productService.getProductClose();
    setProducts(data);
  }
  useEffect(() => {
    getProductClothCategory();
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

export default ClothingAndFootweare;

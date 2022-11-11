import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";

function Babycarriges() {
  const [products, setProducts] = useState([]);
  async function getProductBabycarrigesCategory() {
    const { data } = await productService.getProductBabycarriges();
    setProducts(data);
  }
  useEffect(() => {
    getProductBabycarrigesCategory();
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
export default Babycarriges;

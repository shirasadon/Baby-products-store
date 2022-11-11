import ProductCart from "../components/productCart";
import { useState } from "react";
import { useEffect } from "react";
import cartService from "../services/cartService";

function Cart() {
  const [products, setProducts] = useState([]);
  async function getProductInCart() {
    const { data } = await cartService.getProducCart();
    setProducts(data);
  }
  useEffect(() => {
    getProductInCart();
  }, []);
  return (
    <>
      <div className="row">
        {!products.length ? (
          <p>No Products</p>
        ) : (
          products.map((product) => (
            <ProductCart key={product._id} product={product} />
          ))
        )}
      </div>
    </>
  );
}

export default Cart;

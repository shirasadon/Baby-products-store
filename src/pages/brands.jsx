import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";
function Brands() {
  const [brands, setBrands] = useState([]);
  async function getProductBrandsCategory() {
    const { data } = await productService.getProductBrands();
    setBrands(data);
  }
  useEffect(() => {
    getProductBrandsCategory();
  }, []);
  return (
    <>
      <div className="row">
        {!brands.length ? (
          <p>No Products</p>
        ) : (
          brands.map((brands) => (
            <CardProduct key={brands._id} brands={brands} />
          ))
        )}
      </div>
    </>
  );
}

export default Brands;

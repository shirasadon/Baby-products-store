import EditableProductCard from "../components/EditableProductCard";
import { useState } from "react";
import { useEffect } from "react";
import productService from "../services/productService";

function ViewAllProducts() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
      const { data } = await productService.ViewAllProducts();
      setProducts(data);
    }
   
    useEffect(() => {
        getProducts();
    }, []);
    return ( 
<>

<div className="row">
        {!products.length ? (
          <p>No Products..</p>
        ) : (
            products.map((product) => (
            <EditableProductCard
              key={product._id}
              product={product}
            />
          ))
        )}
      </div>





     
</>

     );
}

export default ViewAllProducts;
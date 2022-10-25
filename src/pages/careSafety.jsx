import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";
import {useState}from "react"
function Chairsafety() {
 
  const [products,setProducts]=useState([]);
async function getProductchairSaftyCategory(){
  const {data}=await productService.getProductChair();
  setProducts(data);
}
useEffect(()=>{
  getProductchairSaftyCategory();
},[])
  return( 
  <>
   <div className="row">
        {!products.length ? (
          <p>No Products</p>
        ) : (
          products.map((product) => (
            <CardProduct key={product._id} product={product}/>
          ))
        )}
      </div>
  
  </>
  )
}


export default Chairsafety;

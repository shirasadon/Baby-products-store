import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "../components/cardProduct";
import productService from "../services/productService";

function Babycarriges() {
  const [babycarriges,setBabycarriges]=useState([]);
  async function getProductBabycarrigesCategory(){
    const {data}=await productService.getProductBabycarriges();
    setBabycarriges(data);
  }
  useEffect(()=>{
    getProductBabycarrigesCategory();
  },[])
  return(
<>
<div className="row">
        {!babycarriges.length ? (
          <p>No Products</p>
        ) : (
          babycarriges.map((babycarriges) => (
            <CardProduct key={babycarriges._id} babycarriges={babycarriges}/>
          ))
        )}
      </div>
  
  </>
  ) 
          }
export default Babycarriges;


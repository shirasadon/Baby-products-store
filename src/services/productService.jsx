import httpService from "./httpService";

 export const createProduct=(product)=>{
    return httpService.post("/products",product)
 }

 const productService ={createProduct}

 export default productService
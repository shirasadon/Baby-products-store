import httpService from "./httpService";

 export const createProduct=(product)=>{
    return httpService.post("/products",product)
 }

export function getProductToys(){
   return httpService.get("/products/toys");
};

export function getProductBabycarriges(){
   return httpService.get("/products/babycarriges");
};


 const productService ={createProduct,getProductToys,getProductBabycarriges}

 export default productService
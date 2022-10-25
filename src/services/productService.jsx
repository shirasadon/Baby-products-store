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

export function getProductChair(){
   return httpService.get("/products/chairsafty");
};


export function getProductClose(){
   return httpService.get("/products/clothingandfootweare");
};

 const productService ={createProduct,getProductToys,getProductBabycarriges,getProductChair,getProductClose}

 export default productService
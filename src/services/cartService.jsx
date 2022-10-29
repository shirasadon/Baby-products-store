import httpService from "./httpService";

  export const getProducCart = () => {
    return httpService.get("/cart");
  };
  
const cartService={getProducCart}
  export default cartService
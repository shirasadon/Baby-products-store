import httpService from "./httpService";

export const getProducCart = () => {
  return httpService.get("/cart");
};

export const deleteproductFromCart = (id) => {
  return httpService.delete(`/cart/${id}`);
};

const cartService = { getProducCart, deleteproductFromCart };
export default cartService;

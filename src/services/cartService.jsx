import httpService from "./httpService";

export const getProducCart = () => {
  return httpService.get("/cart");
};

export const deleteproductFromCart = (product) => {
  const productId = product._id;
  delete product._id;
  return httpService.delete(`/cart/${productId}`, product);
};

const cartService = { getProducCart, deleteproductFromCart };
export default cartService;

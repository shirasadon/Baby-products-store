import httpService from "./httpService";

export const createProduct = (product) => {
  return httpService.post("/products", product);
};

export function getProductToys() {
  return httpService.get("/products/toys");
}

export function getProductBabycarriges() {
  return httpService.get("/products/babycarriges");
}

export function getProductChair() {
  return httpService.get("/products/chairsafty");
}

export const addproducttocart = (id, product) => {
  return httpService.post(`/cart/addproduct`, product);
};

export function getProductClose() {
  return httpService.get("/products/clothingandfootweare");
}

export function getProductFurniture() {
  return httpService.get("/products/furniture");
}
export function ViewAllProducts() {
  return httpService.get("/products/ViewAllProducts");
}
export function editProduct(id, product) {
  return httpService.put(`/products/${id}`, product);
}

export function deleteProduct(id) {
  return httpService.delete(`/products/${id}`);
}

const productService = {
  createProduct,
  getProductToys,
  getProductBabycarriges,
  getProductChair,
  getProductClose,
  getProductFurniture,
  addproducttocart,
  editProduct,
  ViewAllProducts,
  deleteProduct,
};

export default productService;

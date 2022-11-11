import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/productService";

function DeleteProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function DeleteProduct() {
      await productService.deleteProduct(id);
      navigate("/products");
    }

    DeleteProduct();
  });
  return null;
}

export default DeleteProduct;

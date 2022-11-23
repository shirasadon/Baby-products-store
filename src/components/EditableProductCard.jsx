import EditProduct from "./editProduct";
import { useState } from "react";
import DeleteProductFromStore from "./DeleteProductFromStore";

function EditableProductCard({ product }) {
  const [click, setClick] = useState(false);
  const [clickDelete, setClickDelete] = useState(false);
  const { _id, img, title, description, category, price } = product;
 
  const rendersingleproduct=()=>{
    console.log( "this is" ,product);
    setClick(true);
  }
  const setClickFalse = () => {
    setClick(false)
  }
  const pressDelete=()=>{
    console.log( "this is" ,product);
    setClickDelete(true);
  }
  const setClickFalseDelete = () => {
    setClickDelete(false)
  }
  return (
    <>
      <div class="container" style={{ marginTop: "50px", width: "300px" }}>
        <div>
          <div>
            <div class="card-sl">
              <div class="card-image">
                <img src={img} />
              </div>

              <div class="card-heading">{title}</div>
              <div class="card-text">{description}</div>
              <div class="card-text">{category}</div>
              <div class="card-text">{price}</div>
              <button
                class="buttoncart"
                type="button"
                className="buttoncart"
                data-bs-toggle="modal"
                data-bs-target="#editmodal"
                onClick={rendersingleproduct}
              >
                Edit product <i className="bi bi-pencil-fill"></i>
              </button>
              {
                click && 
                <EditProduct
                  product={product}
                  handleSetClickFalse={() => setClickFalse(false)}
                ></EditProduct>
              }

              <button
                type="button"
                class="buttoncart2"
                className="buttoncart2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={pressDelete}

              >
                delete product <i className="bi bi-trash-fill"></i>
              </button>
              {
 clickDelete && 
              <DeleteProductFromStore 
              product={product}
              handleSetClickFalseDelete={() => setClickFalseDelete(false)}
              ></DeleteProductFromStore>
              }
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default EditableProductCard;

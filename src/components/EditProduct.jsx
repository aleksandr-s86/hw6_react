import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../store/productSlice";
import "./product.css";

export function EditProduct({ productId, onClose }) {

  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({ id: productId, name, description, price, available })
    );
    onClose();
  };

  if (!product) return null;

  return (
    <div className="edit-product-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>
          Available:
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
        <button className="button" type="submit">
          Update Product
        </button>
        <button className="button button-close" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
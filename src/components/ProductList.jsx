import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "../store/productSlice";
import { useState } from "react";
import { EditProduct } from "./EditProduct";
import "./product.css";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const [editingProductId, setEditingProductId] = useState(null);

  const dispatch = useDispatch();

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
  };

  const handleCloseEditForm = () => {
    setEditingProductId(null);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <>
          <EditProduct
            productId={editingProductId}
            onClose={handleCloseEditForm}
          />
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Available: {product.available ? "Yes" : "No"}</p>
                </div>

                <div className="product-actions">
                  <button
                    className="button"
                    onClick={() => handleEditClick(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="button-delete"
                    onClick={() => dispatch(deleteProduct(product.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="button"
                    onClick={() => dispatch(toggleAvailability(product.id))}
                  >
                    Toggle Availability
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProductList;

// src/App.jsx
import React from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import { EditProduct } from "./components/EditProduct";

function App() {
  return (
    <div>
      <h1>Product Catalog</h1>
      <AddProduct />
      <ProductList />
      <EditProduct/>
    </div>
  );
}

export default App;

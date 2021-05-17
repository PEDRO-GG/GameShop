import React from "react";

export default function ProductCard({ product, addToOrder }) {
  return (
    <div key={product.id} className="bg-blue-100 p-5 flex flex-col text-center">
      <p className="text-xl">{product.name}</p>
      <p className="text-lg font-light">${product.price}</p>
      <button
        onClick={() => addToOrder(product)}
        className="bg-blue-500 text-white p-3"
      >
        + Add To Order
      </button>
    </div>
  );
}

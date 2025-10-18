import React from "react";
import products from "../productsData";

export default function Productos({ cart, setCart }) {
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Catálogo de Maquinaria</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#2a6f97" }}>
              ${product.price.toLocaleString()}
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#ff8c00",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

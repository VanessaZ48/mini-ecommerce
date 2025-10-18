import React from "react";

export default function Productos({ cart, setCart }) {
  // 🔹 Datos de los productos (antes en productsData.js)
  const products = [
    {
      id: 1,
      name: "ULTRA Patty Maker",
      description:
        "La máquina ULTRA Patty Maker permite fabricar empanadas de masa de maíz con 1, 2 ó 3 operarios, con un rendimiento de hasta 12, 24 ó 30 empanadas por minuto respectivamente.",
      price: 14500,
      image: "/ULTRA Patty Maker.png",
    },
    {
      id: 2,
      name: "SUPER Patty Maker",
      description:
        "La máquina SUPER Patty Maker permite fabricar empanadas de masa de maíz con 1 o 2 operarios, con un rendimiento de hasta 12 ó 18 empanadas por minuto respectivamente.",
      price: 12500,
      image: "/SUPER Patty Maker.jpg",
    },
    {
      id: 3,
      name: "OPTI Patty Maker",
      description:
        "La máquina OPTI Patty Maker permite fabricar empanadas de masa de maíz con 1 operario, con un rendimiento de 8 empanadas o arepas por minuto.",
      price: 9800,
      image: "/OPTI Patty Maker.jpg",
    },
  ];

  // Lógica para agregar al carrito
  const addToCart = (product) => {
    const existing = cart.find((c) => c.id === product.id);

    if (existing) {
      const updated = cart.map((c) =>
        c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Estilos
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardHoverStyle = {
    transform: "scale(1.03)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  const buttonStyle = {
    backgroundColor: "#004080",
    color: "white",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "8px",
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#e9eef3" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#003366",
          marginBottom: "25px",
        }}
      >
        Catálogo de Maquinaria
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, cardStyle)
            }
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "#003366", marginTop: "10px" }}>
              {product.name}
            </h3>
            <p style={{ fontSize: "14px", color: "#333" }}>
              {product.description}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#0056b3",
                fontSize: "18px",
              }}
            >
              ${product.price.toLocaleString()}
            </p>
            <button onClick={() => addToCart(product)} style={buttonStyle}>
              Agregar al carrito 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

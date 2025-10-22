
import React from "react";

// Componente principal 'Productos'
// 'cart' (el carrito actual) y 'setCart' (función para actualizarlo)
export default function Productos({ cart, setCart }) {
  
  // Lista de productos disponibles en el catálogo
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

  // Función que agrega un producto al carrito
  // Si el producto ya existe, incrementa su cantidad
  const addToCart = (product) => {
    // Busca si el producto ya está en el carrito
    const existing = cart.find((c) => c.id === product.id);

    if (existing) {
      // Si ya existe, se crea una nueva lista con la cantidad actualizada
      const updated = cart.map((c) =>
        c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      setCart(updated);
    } else {
      // Si no existe, se agrega como nuevo producto con cantidad 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Estilos para las tarjetas de productos (cards)
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  // Efecto visual al pasar el cursor 
  const cardHoverStyle = {
    transform: "scale(1.03)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  // Estilo para los botones “Agregar al carrito”
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

  // Renderiza el contenido en pantalla
  return (
    <div style={{ padding: "30px", backgroundColor: "#e9eef3" }}>
      {/* Título principal */}
      <h2
        style={{
          textAlign: "center",
          color: "#003366",
          marginBottom: "25px",
        }}
      >
        Catálogo de Maquinaria
      </h2>

      {/* Contenedor de productos con diseño de cuadrícula */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Recorre el arreglo de productos y genera una tarjeta por cada uno */}
        {products.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            // Aplica efecto hover al pasar el ratón
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, cardStyle)
            }
          >
            {/* Imagen del producto */}
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

            {/* Nombre del producto */}
            <h3 style={{ color: "#003366", marginTop: "10px" }}>
              {product.name}
            </h3>

            {/* Descripción del producto */}
            <p style={{ fontSize: "14px", color: "#333" }}>
              {product.description}
            </p>

            {/* Precio del producto */}
            <p
              style={{
                fontWeight: "bold",
                color: "#0056b3",
                fontSize: "18px",
              }}
            >
              ${product.price.toLocaleString()}
            </p>

            {/* Botón para agregar al carrito */}
            <button onClick={() => addToCart(product)} style={buttonStyle}>
              Agregar al carrito 🛒
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
